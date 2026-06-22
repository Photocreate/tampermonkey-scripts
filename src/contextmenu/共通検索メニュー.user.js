// ==UserScript==
// @name         [Photocreate]共通検索メニュー
// @namespace    https://admin-app.photocreate.jp/
// @version      1.0
// @description  管理画面等から選択した文字列をもとに、各種検索をTampermonkeyメニューから行います
// @include      *
// @exclude      file://*
// @require      https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/dist/pcTamperMonkey.js
// @author       ITO Tetsunosuke
// @grant        GM_log
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// @noframes
// @updateURL    https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/src/contextmenu/%E5%85%B1%E9%80%9A%E6%A4%9C%E7%B4%A2%E3%83%A1%E3%83%82%E3%83%A5%E3%83%BC.user.js
// @downloadURL  https://raw.githubusercontent.com/photocreate/tampermonkey-scripts/main/src/contextmenu/%E5%85%B1%E9%80%9A%E6%A4%9C%E7%B4%A2%E3%83%A1%E3%83%82%E3%83%A5%E3%83%BC.user.js
// ==/UserScript==

(function() {
    'use strict';
    const pcTM = new PCTamperMonkey();

    // 検索処理 of 共通実行関数
    const executeSearch = (name, getUrlFn, processQueryFn = (q) => q) => {
        const selected = document.getSelection().toString();
        const query = processQueryFn(selected);
        const url = getUrlFn(query);
        GM_log(`${name}: ${url}`);
        if (url && url.length > 0) {
            GM_openInTab(url, {active: true});
        } else {
            alert("テキストを選択してから実行してください");
        }
    };

    GM_registerMenuCommand("イベントID検索", function() {
        executeSearch("イベントID検索", (q) => pcTM.buildSearchURLByEventId(q), PCTamperMonkey.replaceFullToHalf);
    });

    GM_registerMenuCommand("イベント名検索", function() {
        executeSearch("イベント名検索", (q) => pcTM.buildSearchURLByEventName(q));
    });

    GM_registerMenuCommand("写真番号検索", function() {
        executeSearch("写真番号検索", (q) => pcTM.buildSearchURLByPhotoNum(q), PCTamperMonkey.replaceFullToHalf);
    });

    GM_registerMenuCommand("注文番号検索", function() {
        executeSearch("注文番号検索", (q) => pcTM.buildSearchURLByOrderNum(q), PCTamperMonkey.replaceFullToHalf);
    });

    GM_registerMenuCommand("取引先検索", function() {
        executeSearch("取引先検索", (q) => pcTM.buildSearchURLByPartnerName(q));
    });

    GM_registerMenuCommand("カメラマン名検索", function() {
        executeSearch("カメラマン名検索", (q) => pcTM.buildSearchURLByPhotographerName(q));
    });

    GM_registerMenuCommand("CloudSearchで検索", function() {
        executeSearch("CloudSearchで検索", (q) => pcTM.buildGoogleCloudSearchURL(q));
    });
})();
