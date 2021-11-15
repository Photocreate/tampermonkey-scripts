class PCTamperMonkey {
    settings = {};
    constructor(settings) {
        console.log(settings);
        if (typeof settings === "undefined") {
            // default values
            this.settings.adminTopUrl = 'https://admin-app.photocreate.jp/adm/';
        } else {
            if (typeof settings.adminTopUrl !== "undefined") {
                this.settings.adminTopUrl = ettings.adminTopUrl;
            }
        }
        console.log(this.settings);
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
        console.log(this.settings);
        const url = new URL(this.settings.adminAppUrl);
        if (query.length === 0) {
            return;
        }

        if (query.indexOf("E") === 0 || query.indexOf("e") === 0) {
            // 先頭の大文字小文字のEを削除して検索
            url.searchParams.set("action_event_info", "true");
            url.searchParams.set("events_id", query.substr(1));
        } else if (query.indexOf("P") === 0 || query.indexOf("p") === 0) {
            // 先頭の大文字小文字のPを残して検索
            url.searchParams.set("action_event_search_resultnavi", "true");
            url.searchParams.set("events_id", query);
        } else if (isFinite(parseInt(query))) {
            // 数値のみもイベントIDとみなす
            url.searchParams.set("action_event_info", "true");
            url.searchParams.set("events_id", query);
        } else {
            GM_log("条件にあてはまらないのでイベント名検索します");
            url = this.buildSearchURLByEventName(query);
        }

        return url.toString();
    }


    /**
     * イベント名検索
     */
    buildSearchURLByEventName = (query) => {
        const url = new URL(this.settings.adminAppUrl);
        if (query.length === 0) {
            return;
        }
        url.searchParams.set("action_event_search_form", "true");
        url.searchParams.set("action_event_search_result", "true");
        url.searchParams.set("event_name", query);

        return url.toString();
    }

     /**
      * 注文番号検索のURLを生成
      * 一旦半角だけ対応とする
      */
    buildSearchURLByOrderNum = (query) => {
        const url = new URL(this.settings.adminAppUrl);
        url.searchParams.set("action_support_order_detail", "true");
        url.searchParams.set("action_support_order_num", query);
        url.hash = "result";

        return url.toString();
    }

     /**
      * 写真番号検索のURLを生成
      */
    buildSearchURLByPhotoNum = (query) => {
        const url = new URL(this.settings.adminAppUrl);
        if(query.indexOf("\r") > 0 || query.indexOf("\n") > 0) {
            //query = query.replace(/ /g, "").replace(/(\r|\n|\r\n)/g, "%0D%0A");
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
        const url = new URL("https://cloudsearch.google.com/cloudsearch/search");
        url.searchParams.set("q", query);

        return url.toString();
    }
}
