// ==UserScript==
// @name         [ジョブカン給与]従業員検索
// @namespace    https://payroll.jobcan.jp/
// @version      1.0
// @description  ジョブカン給与従業員一覧から検索します
// @include      *
// @exclude      file://*
// @author       ITO Tetsunosuke
// @grant        GM_log
// @grant        GM_openInTab
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';
    const buildJobcanPayrollSearchURL = (query) => {
        const url = new URL("https://payroll.jobcan.jp/employees");
        if (query.length === 0) {
            return;
        }
        url.searchParams.set("q", query);

        return url.toString();
    };

    const selected = document.getSelection().toString();
    const query = selected;
    const url = buildJobcanPayrollSearchURL(query);
    GM_log(url);
    if (url.length > 0) {
        GM_openInTab(url, {active: true});
    }
})();
