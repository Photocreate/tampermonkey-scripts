export class PCTamperMonkey {

    settings = {};
    constructor(settings) {
        const defaultAdminAppUrl = 'https://admin-app.photocreate.jp/adm/';
        if (typeof settings === "undefined") {
            // default values
            this.settings.adminAppUrl = defaultAdminAppUrl;
        } else {
            if (typeof settings.adminAppUrl === "undefined") {
                this.settings.adminAppUrl = defaultAdminAppUrl;
            } else {
                this.settings.adminAppUrl = settings.adminAppUrl;
            }
        }
    }

    // 全半角変換
    static replaceFullToHalf = (str) => {
        return str.replace(/[！-～]/g, (s) => {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
    }

    /**
     * イベントID検索のURLを生成
     */
    buildSearchURLByEventId = (query) => {
        if (window.top !== window.self || query.length === 0) {
            return "";
        }
        const url = new URL(this.settings.adminAppUrl);

        if (query.indexOf("E") === 0 || query.indexOf("e") === 0) {
            // 先頭の大文字小文字のEを削除して検索
            url.searchParams.set("action_event_info", "true");
            url.searchParams.set("events_id", query.substr(1));
        } else if (query.indexOf("P") === 0 || query.indexOf("p") === 0) {
            // 先頭の大文字小文字のPを残して検索
            url.searchParams.set("action_event_search_resultnavi", "true");
            url.searchParams.set("search_type", "event");
            url.searchParams.set("search_str", query);
        } else if (isFinite(parseInt(query))) {
            // 数値のみもイベントIDとみなす
            url.searchParams.set("action_event_info", "true");
            url.searchParams.set("events_id", query);
        } else {
            // 条件にあてはまらないのでイベント名検索
            return this.buildSearchURLByEventName(query);
        }

        return url.toString();
    }


    /**
     * イベント名検索
     */
    buildSearchURLByEventName = (query) => {
        if (window.top !== window.self || query.length === 0) {
            return "";
        }
        const url = new URL(this.settings.adminAppUrl);
        url.searchParams.set("action_event_search_form", "true");
        url.searchParams.set("action_event_search_result", "true");
        url.searchParams.set("event_name", query);
        url.hash = "result"

        return url.toString();
    }

     /**
      * 注文番号検索のURLを生成
      * 一旦半角だけ対応とする
      */
    buildSearchURLByOrderNum = (query) => {
        if (window.top !== window.self || query.length === 0) {
            return "";
        }
        const url = new URL(this.settings.adminAppUrl);
        url.searchParams.set("action_support_order_detail", "true");
        url.searchParams.set("order_num", query);
        url.hash = "result";

        return url.toString();
    }

    /**
     * カメラマン名検索
     */
    buildSearchURLByPhotographerName = (query) => {
        if (window.top !== window.self || query.length === 0) {
            return "";
        }
        const url = new URL(this.settings.adminAppUrl);
        url.searchParams.set("action_photographer_index", "true");
        url.searchParams.set("search", "true");
        url.searchParams.set("search_name", query);

        return url.toString();
    }
    /**
     * 取引先検索
     */
    buildSearchURLByPartnerName = (query) => {
        if (window.top !== window.self || query.length === 0) {
            return "";
        }
        const url = new URL(this.settings.adminAppUrl);
        url.searchParams.set("action_partner_index", "true");
        url.searchParams.set("search_str", query);

        return url.toString();
    }

     /**
      * 写真番号検索のURLを生成
      */
    buildSearchURLByPhotoNum = (query) => {
        if (window.top !== window.self || query.length === 0) {
            return "";
        }
        const url = new URL(this.settings.adminAppUrl);
        if(query.indexOf("\r") > 0 || query.indexOf("\n") > 0) {
            query = query.replace(/ /g, "").replace(/(\r|\n|\r\n)/g, "\r\n");
        }
        query = query.trim()

        url.searchParams.set("action_open_photo_edit", "true");
        url.searchParams.set("capa", "1");
        url.searchParams.set("photo_numbers", query);

        return url.toString();
    }

    /**
     * Google Cloud Search で検索するURLを生成
     */
    buildGoogleCloudSearchURL = (query) => {
        if (window.top !== window.self || query.length === 0) {
            return "";
        }
        const url = new URL("https://cloudsearch.google.com/cloudsearch/search");
        url.searchParams.set("q", query);

        return url.toString();
    }

    /**
     * ジョブカン労務検索
     */
    buildJobcanLMSSearchURL = (query) => {
        if (window.top !== window.self || query.length === 0) {
            return "";
        }
        const url = new URL("https://lms.jobcan.jp/employees");
        url.searchParams.set("q", query);

        return url.toString();
    }

}
