// ==UserScript==
// @name         イベントID検索
// @namespace    https://admin-app.photocreate.jp/
// @version      0.1
// @description  try to take over the world!
// @include         *
// @exclude        file://*
// @author       You
// @grant        GM_log
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant
// ==/UserScript==

(function() {
    'use strict';
    const adminAppUrl = "https://admin-app.photocreate.jp/adm/index.php?";
    // 全半角変換（ライブラリ化したい）
    const replaceFullToHalf = (str) => {
        return str.replace(/[！-～]/g, (s) => {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
    }
    /**
      * イベントID検索のURLを生成
      */
    const buildSearchByEventId = (query) => {
        if (query.length === 0) {
            return;
        }

        if (query.indexOf("E") === 0 || query.indexOf("e") === 0) {
            query = query.substr(1);
            return adminAppUrl + "action_event_info=true&events_id=" + query;
        } else if (query.indexOf("P") === 0 || query.indexOf("p") === 0) {
            return adminAppUrl + "action_event_search_resultnavi=true&search_str=" + query;
        } else if (isFinite(parseInt(query))) {
            // 数値のみもイベントIDとみなす
            return adminAppUrl + "action_event_info=true&events_id=" + query;
        }
    }
    GM_registerMenuCommand("イベントID検索", () => {
        const selected = document.getSelection().toString();
        const query = replaceFullToHalf(selected);
        const url = buildSearchByEventId(query);
        GM_log(url);
        if (url.length > 0) {
            GM_openInTab(url);
        }
    }, "e");
})();
