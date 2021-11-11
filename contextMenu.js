// ==UserScript==
// @name            Context Menu
// @namespace  https://admin-app.photocreate.jp/
// @description   フォトクリ管理画面の検索機能
// @version         0.1.2
// @author          Photocreate
// @include         *
// @exclude        file://*
// @grant            GM_log
// @grant            GM_openInTab
// @grant            GM_registerMenuCommand
// ==/UserScript==]


(function() {
    'use strict';
    // 管理画面のトップURL
    // TODO: VPN利用者向けにadm2.pkm.jpでも使えるようにするなど（ドメインはstorageで持つようにできる？）
    const adminAppUrl = "https://admin-app.photocreate.jp/adm/index.php?";

    // 全半角変換（ライブラリ化したい）
    const replaceFullToHalf = (str) => {
        return str.replace(/[！-～]/g, (s) => {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
    }

    /**
      * イベントID検索のURLを生成
      */
    const buildSearchByEventId = (query) => {
        if (query.length === 0) {
            return;
        }

        if (query.indexOf("E") === 0 || query.indexOf("e") === 0) {
            query = query.substr(1);
            return adminAppUrl + "action_event_info=true&events_id=" + query;
        } else if (query.indexOf("P") === 0 || query.indexOf("p") === 0) {
            return adminAppUrl + "action_event_search_resultnavi=true&search_str=" + query;
        } else if (isFinite(parseInt(query))) {
            // 数値のみもイベントIDとみなす
            return adminAppUrl + "action_event_info=true&events_id=" + query;
        }
    }
    /**
      * イベント名検索のURLを生成
      */
    const buildSearchByEventName = (query) => {
        if (query.length === 0) {
            return;
        }

        return adminAppUrl + "action_event_search_form=true&action_event_search_result=true&event_name=" + encodeURI(query);
    }

    /**
      * 注文番号検索のURLを生成
      */
    const buildSearchByOrderNum = (query) => {
        return adminAppUrl + `action_support_order_detail=true&order_num=${query}#result`;
    }

    /**
      * 写真番号検索のURLを生成
      */
    const buildSearchByPhotoNum = (query) => {
        if(query.indexOf("\r") > 0 || query.indexOf("\n") > 0) {
            query = query.replace(/ /g, "").replace(/(\r|\n|\r\n)/g, "%0D%0A");
        }
        query = query.trim()
        return adminAppUrl + "action_open_photo_edit=true&page=0&capa=1&photo_numbers=" + query
    }

    /**
     * Google Cloud Search で検索するURLを生成
     */
    const buildGoogleCloudSearch = (query) => {
        return "https://cloudsearch.google.com/cloudsearch/search?q=" + query;
    }

    /*
    GM_registerMenuCommand("（動作テスト用 console.log）", () => {
        const selected = document.getSelection().toString();
        const query = replaceFullToHalf(selected);
        GM_log(selected, query);
    },"");
    */

    GM_registerMenuCommand("イベントID検索", () => {
        const selected = document.getSelection().toString();
        const query = replaceFullToHalf(selected);
        const url = buildSearchByEventId(query);
        GM_log(url);
        if (url.length > 0) {
            GM_openInTab(url, { active: true });
        }
    }, "a");

    GM_registerMenuCommand("イベント名で検索", () => {
        const selected = document.getSelection().toString();
        const query = selected;
        const url = buildSearchByEventName(query);
        GM_log(url);
        if (url.length > 0) {
            GM_openInTab(url, { active: true });
        }
    }, "a");
    GM_registerMenuCommand("注文番号検索", () => {
        const selected = document.getSelection().toString();
        const query = replaceFullToHalf(selected);
        const url = buildSearchByOrderNum(query);
        GM_log(url);
        if (url.length > 0) {
            GM_openInTab(url, { active: true });
        }
    }, "a");
    GM_registerMenuCommand("写真番号検索", () => {
        const selected = document.getSelection().toString();
        const query = replaceFullToHalf(selected);
        const url = buildSearchByPhotoNum(query);
        GM_log(url);
        if (url.length > 0) {
            GM_openInTab(url, { active: true });
        }
    }, "a");
    GM_registerMenuCommand("GoogleCloudSearchで検索", () => {
        const selected = document.getSelection().toString();
        const url = buildGoogleCloudSearch(selected);
        GM_log(url);
        if (url.length > 0) {
            GM_openInTab(url, { active: true });
        }
    }, "g");

})();

