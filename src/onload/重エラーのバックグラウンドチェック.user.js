// ==UserScript==
// @name         [勤労の獅子]重エラーのバックグラウンドチェック
// @namespace    https://kinrou.hr44.jp/kinrou/kojin/kintaiDakoku/
// @version      1.1
// @description 勤労の獅子の当月勤怠データから重エラーを検知します
// @author       ITO Tetsunosuke
// @match      https://kinrou.hr44.jp/kinrou/kojin/kintaiDakoku/
// @grant        GM_log
// @grant       GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    const url = "/kinrou/kojin/kojinbetuSyoukai/";
    GM_xmlhttpRequest({
        method: "GET",
        url: url,
        onload: function(response) {
            const _document = new DOMParser().parseFromString(response.responseText, "text/html");
            // hidari_kotei のtrの中で ..big_error_color であればそのindex、を取る
            // 重エラーのある日々
            const hasErrorsIndexList = [..._document.querySelectorAll("#hidari_kotei tbody tr")].reduce( (ac, cv, index) => {
                // 当日の重エラーは無視
                if (index === new Date().getDate()-1) {
                    return ac;
                }
                if (cv.classList.contains("big_error_color")) {
                    ac.push(index);
                }
                return ac;
            },[]);

            // それらに基づいて日付、曜日、重エラーの内容を取得する
            const errors = hasErrorsIndexList.map( (index) => {
                const hidari = _document.querySelector(`#hidari_kotei tbody tr:nth-of-type(${index+1})`);
                const data_hyouji = _document.querySelector(`#data_hyouji tbody tr:nth-of-type(${index+1})`);
                const m = {
                    "date_ymd": hidari.querySelector("#id_date_ymd").innerText,
                    "week_number": hidari.querySelector("#id_week_number").innerText,
                    "big_err_contents": data_hyouji.querySelector("#id_big_err_contents").innerText
                };
                return `${m.date_ymd} (${m.week_number}） ${m.big_err_contents}`;
            });
            // 画面表示
            const tbody = document.querySelector(".login_data_field table tbody");
            errors.forEach( (error) => {
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.style.textAlign = "left";
                td.style.color = "#F00";
                td.style.fontWeight = "bold";
                td.innerText = error;
                tr.appendChild(td);
                tbody.appendChild(tr);
            });
        }
    });
})();
