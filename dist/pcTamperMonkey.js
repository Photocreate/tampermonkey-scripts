"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PCTamperMonkey = function PCTamperMonkey(settings) {
  var _this = this;

  _classCallCheck(this, PCTamperMonkey);

  _defineProperty(this, "settings", {});

  _defineProperty(this, "buildSearchURLByEventId", function (query) {
    var url = new URL(_this.settings.adminAppUrl);

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
      return _this.buildSearchURLByEventName(query);
    }

    return url.toString();
  });

  _defineProperty(this, "buildSearchURLByEventName", function (query) {
    var url = new URL(_this.settings.adminAppUrl);

    if (query.length === 0) {
      return;
    }

    url.searchParams.set("action_event_search_form", "true");
    url.searchParams.set("action_event_search_result", "true");
    url.searchParams.set("event_name", query);
    url.hash("result");
    return url.toString();
  });

  _defineProperty(this, "buildSearchURLByOrderNum", function (query) {
    var url = new URL(_this.settings.adminAppUrl);
    url.searchParams.set("action_support_order_detail", "true");
    url.searchParams.set("order_num", query);
    url.hash = "result";
    return url.toString();
  });

  _defineProperty(this, "buildSearchURLByPhotoNum", function (query) {
    var url = new URL(_this.settings.adminAppUrl);

    if (query.indexOf("\r") > 0 || query.indexOf("\n") > 0) {
      //query = query.replace(/ /g, "").replace(/(\r|\n|\r\n)/g, "%0D%0A");
      query = query.replace(/ /g, "").replace(/(\r|\n|\r\n)/g, "\r\n");
    }

    url.searchParams.set("action_open_photo_edit", "true");
    url.searchParams.set("capa", "1");
    url.searchParams.set("photo_numbers", query);
    return url.toString();
  });

  _defineProperty(this, "buildGoogleCloudSearchURL", function (query) {
    var url = new URL("https://cloudsearch.google.com/cloudsearch/search");
    url.searchParams.set("q", query);
    return url.toString();
  });

  if (typeof settings === "undefined") {
    // default values
    this.settings.adminAppUrl = 'https://admin-app.photocreate.jp/adm/';
  } else {
    if (typeof settings.adminAppUrl !== "undefined") {
      this.settings.adminAppUrl = ettings.adminAppUrl;
    }
  }
} // 全半角変換
;

_defineProperty(PCTamperMonkey, "replaceFullToHalf", function (str) {
  return str.replace(/[！-～]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
});