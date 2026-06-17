// ==UserScript==
// @name         [管理画面]イベントID検索（β）
// @namespace    https://admin-app.photocreate.jp/
// @version      1.0
// @description  管理画面から選択した文字列をもとにイベントID検索を行います（β版：常時ロード＆コマンドメニューから実行）
// @include      *
// @exclude      file://*
// @require      https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/dist/pcTamperMonkey.js
// @author       ITO Tetsunosuke
// @grant        GM_log
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// @noframes
// @updateURL    https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/src/contextmenu/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88ID%E6%A4%9C%E7%B4%A2%EF%BC%88%CE%B2%EF%BC%89.user.js
// @downloadURL  https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/src/contextmenu/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88ID%E6%A4%9C%E7%B4%A2%EF%BC%88%CE%B2%EF%BC%89.user.js
// ==/UserScript==

(function() {
    'use strict';
    GM_registerMenuCommand("イベントID検索", function() {
        const pcTM = new PCTamperMonkey();
        const selected = document.getSelection().toString();
        const query = PCTamperMonkey.replaceFullToHalf(selected);
        const url = pcTM.buildSearchURLByEventId(query);
        GM_log(url);
        if (url.length > 0) {
            GM_openInTab(url, {active: true});
        } else {
            alert("テキストを選択してから実行してください");
        }
    });
})();
