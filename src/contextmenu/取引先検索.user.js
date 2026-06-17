// ==UserScript==
// @name         [管理画面]取引先検索
// @namespace    https://admin-app.photocreate.jp/
// @version      1.1
// @description  管理画面から選択した文字列をもとに取引先検索を行います
// @include      *
// @exclude      file://*
// @require      https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/dist/pcTamperMonkey.js
// @author       ITO Tetsunosuke
// @grant        GM_log
// @grant        GM_openInTab
// @run-at       context-menu
// @noframes
// @updateURL    https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/src/contextmenu/%E5%8F%96%E5%BC%95%E5%85%88%E6%A4%9C%E7%B4%A2.user.js
// @downloadURL  https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/src/contextmenu/%E5%8F%96%E5%BC%95%E5%85%88%E6%A4%9C%E7%B4%A2.user.js
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
