// ==UserScript==
// @name         CloudSearchで検索
// @namespace    https://admin-app.photocreate.jp/
// @version      1.0
// @description  選択した文字列をGoogle CloudSearch で検索します
// @include      *
// @exclude      file://*
// @require      https://raw.githubusercontent.com/tetsunosuke/tampermonkey-scripts/main/dist/pcTamperMonkey.js
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
    const url = pcTM.buildGoogleCloudSearchURL(query);
    GM_log(url);
    if (url.length > 0) {
        GM_openInTab(url, {active: true});
    }
})();
