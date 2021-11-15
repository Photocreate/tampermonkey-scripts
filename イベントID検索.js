// ==UserScript==
// @name         イベントID検索
// @namespace    https://admin-app.photocreate.jp/
// @version      0.1.1
// @description  管理画面から選択した文字列をもとにイベントID検索を行います
// @include         *
// @exclude        file://*
// @author       ITO Tetsunosuke
// @grant        GM_log
// @grant        GM_openInTab
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';
    const selected = document.getSelection().toString();
    const query = pcTamperMonkey.replaceFullToHalf(selected);
    const url = pcTamperMonkey.buildSearchByEventId(query);
    GM_log(url);
    if (url.length > 0) {
        GM_openInTab(url, {active: true});
    }
})();
