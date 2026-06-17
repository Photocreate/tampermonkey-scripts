// ==UserScript==
// @name         [ジョブカン労務]従業員検索
// @namespace    https://lms.jobcan.jp/
// @version      1.1
// @description  ジョブカン労務従業員一覧から検索します
// @include      *
// @exclude      file://*
// @require      https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/dist/pcTamperMonkey.js
// @author       ITO Tetsunosuke
// @grant        GM_log
// @grant        GM_openInTab
// @run-at       context-menu
// @noframes
// @updateURL    https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/src/contextmenu/%E3%82%B8%E3%83%A7%E3%83%96%E3%82%AB%E3%83%B3%E5%8A%B4%E5%8B%99%E6%A4%9C%E7%B4%A2.user.js
// @downloadURL  https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/src/contextmenu/%E3%82%B8%E3%83%A7%E3%83%96%E3%82%AB%E3%83%B3%E5%8A%B4%E5%8B%99%E6%A4%9C%E7%B4%A2.user.js
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
