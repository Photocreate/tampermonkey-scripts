// ==UserScript==
// @name         [管理画面]取引先検索
// @namespace    https://admin-app.photocreate.jp/
// @version      1.0
// @description  管理画面から選択した文字列をもとに取引先検索を行います
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
    const query = selected;
    const url = pcTM.buildSearchURLByPartnerName(query);
    GM_log(url);
    if (url.length > 0) {
        GM_openInTab(url, {active: true});
    }
})();
