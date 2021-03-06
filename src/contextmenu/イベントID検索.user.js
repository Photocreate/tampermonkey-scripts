// ==UserScript==
// @name         [管理画面]イベントID検索
// @namespace    https://admin-app.photocreate.jp/
// @version      1.0
// @description  管理画面から選択した文字列をもとにイベントID検索を行います
// @include      *
// @exclude      file://*
// @require      https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/dist/pcTamperMonkey.js
// @author       ITO Tetsunosuke
// @grant        GM_log
// @grant        GM_openInTab
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';
    const pcTM = new PCTamperMonkey();
    const selected = document.getSelection().toString();
    const query = PCTamperMonkey.replaceFullToHalf(selected);
    const url = pcTM.buildSearchURLByEventId(query);
    GM_log(url);
    if (url.length > 0) {
        GM_openInTab(url, {active: true});
    }
})();
