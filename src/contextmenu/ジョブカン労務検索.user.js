// ==UserScript==
// @name         [ジョブカン労務]従業員検索
// @namespace    https://lms.jobcan.jp/
// @version      1.0
// @description  ジョブカン労務従業員一覧から検索します
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
    const url = pcTM.buildJobcanLMSSearchURL(query);
    GM_log(url);
    if (url.length > 0) {
        GM_openInTab(url, {active: true});
    }
})();
