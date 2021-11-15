// ==UserScript==
// @name         [管理画面]注文番号検索
// @namespace    https://admin-app.photocreate.jp/
// @version      1.0
// @description  管理画面から選択した文字列をもとに注文番号検索を行います
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
    const query = PCTamperMonkey.replaceFullToHalf(selected);
    const url = pcTM.buildSearchURLByOrderNum(query);
    GM_log(url);
    if (url.length > 0) {
        GM_openInTab(url, {active: true});
    }
})();
