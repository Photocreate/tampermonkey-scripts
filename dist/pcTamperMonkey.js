!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PCTamperMonkey=t():e.PCTamperMonkey=t()}(this,(function(){return(()=>{"use strict";var e={};function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var r=function e(r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t(this,"settings",{}),t(this,"buildSearchURLByEventId",(function(e){var t=new URL(n.settings.adminAppUrl);if(0!==e.length){if(0===e.indexOf("E")||0===e.indexOf("e"))t.searchParams.set("action_event_info","true"),t.searchParams.set("events_id",e.substr(1));else if(0===e.indexOf("P")||0===e.indexOf("p"))t.searchParams.set("action_event_search_resultnavi","true"),t.searchParams.set("events_id",e);else{if(!isFinite(parseInt(e)))return GM_log("条件にあてはまらないのでイベント名検索します"),n.buildSearchURLByEventName(e);t.searchParams.set("action_event_info","true"),t.searchParams.set("events_id",e)}return t.toString()}})),t(this,"buildSearchURLByEventName",(function(e){var t=new URL(n.settings.adminAppUrl);if(0!==e.length)return t.searchParams.set("action_event_search_form","true"),t.searchParams.set("action_event_search_result","true"),t.searchParams.set("event_name",e),t.hash("result"),t.toString()})),t(this,"buildSearchURLByOrderNum",(function(e){var t=new URL(n.settings.adminAppUrl);return t.searchParams.set("action_support_order_detail","true"),t.searchParams.set("action_support_order_num",e),t.hash="result",t.toString()})),t(this,"buildSearchURLByPhotoNum",(function(e){var t=new URL(n.settings.adminAppUrl);return(e.indexOf("\r")>0||e.indexOf("\n")>0)&&(e=e.replace(/ /g,"").replace(/(\r|\n|\r\n)/g,"\r\n")),e=e.trim(),t.searchParams.set("action_open_photo_edit","true"),t.searchParams.set("capa","1"),t.searchParams.set("photo_numbers",e),t.toString()})),t(this,"buildGoogleCloudSearchURL",(function(e){var t=new URL("https://cloudsearch.google.com/cloudsearch/search");return t.searchParams.set("q",e),t.toString()})),void 0===r?this.settings.adminAppUrl="https://admin-app.photocreate.jp/adm/":void 0!==r.adminAppUrl&&(this.settings.adminAppUrl=r.adminAppUrl)};return t(r,"replaceFullToHalf",(function(e){return e.replace(/[！-～]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)}))})),console.log(r),e.default})()}));