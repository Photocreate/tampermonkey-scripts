// ==UserScript==
// @name         CloudSearchで検索
// @namespace    https://admin-app.photocreate.jp/
// @version      1.1
// @description  選択した文字列をGoogle CloudSearch で検索します
// @include      *
// @exclude      file://*
// @require      https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/dist/pcTamperMonkey.js
// @author       ITO Tetsunosuke
// @grant        GM_log
// @grant        GM_openInTab
// @run-at       context-menu
// @noframes
// @updateURL    https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/src/contextmenu/CloudSearch%E3%81%A7%E6%A4%9C%E7%B4%A2.user.js
// @downloadURL  https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/src/contextmenu/CloudSearch%E3%81%A7%E6%A4%9C%E7%B4%A2.user.js
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
