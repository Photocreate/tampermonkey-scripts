//require './pcTamperMonkey';
const {PCTamperMonkey} = require("../src/pcTamperMonkey.js");

describe("static method tests", () => {
    test('static method: replaceFullToHalf', () => {
        expect(PCTamperMonkey.replaceFullToHalf("０１２３４５６７８９")).toBe("0123456789");
        expect(PCTamperMonkey.replaceFullToHalf("ＡＢＣＤＥ")).toBe("ABCDE");
        expect(PCTamperMonkey.replaceFullToHalf("あいうえお")).toBe("あいうえお");
    });
});

describe("constructor without settings", () => {
    let pcTM;
    beforeEach(() => {
        pcTM = new PCTamperMonkey();
    });
    test("settings.adminAppUrl", () => {
        expect(pcTM.settings.adminAppUrl).toBe("https://admin-app.photocreate.jp/adm/")
    });
    test('buildGoogleCloudSearchURL', () => {
        expect(pcTM.buildGoogleCloudSearchURL("")).toBeUndefined();
        expect(pcTM.buildGoogleCloudSearchURL("hoge")).toBe("https://cloudsearch.google.com/cloudsearch/search?q=hoge");
    });
    test('buildSearchURLByEventId', () => {
        expect(pcTM.buildSearchURLByEventId("")).toBeUndefined();
        // 通常のイベント検索
        expect(pcTM.buildSearchURLByEventId("E123")).toBe("https://admin-app.photocreate.jp/adm/?action_event_info=true&events_id=123");
        expect(pcTM.buildSearchURLByEventId("e123")).toBe("https://admin-app.photocreate.jp/adm/?action_event_info=true&events_id=123");
        // ページIDが渡された
        expect(pcTM.buildSearchURLByEventId("P123")).toBe("https://admin-app.photocreate.jp/adm/?action_event_search_resultnavi=true&search_type=event&search_str=P123")
        expect(pcTM.buildSearchURLByEventId("p123")).toBe("https://admin-app.photocreate.jp/adm/?action_event_search_resultnavi=true&search_type=event&search_str=p123")
        // 数字が来た場合はイベントIDとみなす
        expect(pcTM.buildSearchURLByEventId("123")).toBe("https://admin-app.photocreate.jp/adm/?action_event_info=true&events_id=123");

        // 単純文字列
        expect(pcTM.buildSearchURLByEventId("テスト")).toBe("https://admin-app.photocreate.jp/adm/?action_event_search_form=true&action_event_search_result=true&event_name=%E3%83%86%E3%82%B9%E3%83%88#result");

    });
    test('buildSearchURLByEventName', () => {
        expect(pcTM.buildSearchURLByEventName("")).toBeUndefined();
        expect(pcTM.buildSearchURLByEventName("ああああ")).toBe("https://admin-app.photocreate.jp/adm/?action_event_search_form=true&action_event_search_result=true&event_name=%E3%81%82%E3%81%82%E3%81%82%E3%81%82#result");
    });
    test('buildSearchURLByOrderNum', () => {
        expect(pcTM.buildSearchURLByOrderNum("")).toBeUndefined();
        expect(pcTM.buildSearchURLByOrderNum("12345678")).toBe("https://admin-app.photocreate.jp/adm/?action_support_order_detail=true&order_num=12345678#result");
    });
    test('buildSearchURLByPhotographerName', () => {
        expect(pcTM.buildSearchURLByPhotographerName("")).toBeUndefined();
        expect(pcTM.buildSearchURLByPhotographerName("あいうえお")).toBe("https://admin-app.photocreate.jp/adm/?action_photographer_index=true&search=true&search_name=%E3%81%82%E3%81%84%E3%81%86%E3%81%88%E3%81%8A");
    });
    test('buildSearchURLByPartnerName', () => {
        expect(pcTM.buildSearchURLByPartnerName("")).toBeUndefined();
        expect(pcTM.buildSearchURLByPartnerName("あいうえお")).toBe("https://admin-app.photocreate.jp/adm/?action_partner_index=true&search_str=%E3%81%82%E3%81%84%E3%81%86%E3%81%88%E3%81%8A");
    });





    test('buildSearchURLByPhotoNum', () => {
        expect(pcTM.buildSearchURLByPhotoNum("")).toBeUndefined();
        expect(pcTM.buildSearchURLByPhotoNum("1234-5678")).toBe("https://admin-app.photocreate.jp/adm/?action_open_photo_edit=true&capa=1&photo_numbers=1234-5678");
        expect(pcTM.buildSearchURLByPhotoNum("1-2\r3-4")).toBe("https://admin-app.photocreate.jp/adm/?action_open_photo_edit=true&capa=1&photo_numbers=1-2%0D%0A3-4");
        expect(pcTM.buildSearchURLByPhotoNum("1-2\r3-4\n5-6")).toBe("https://admin-app.photocreate.jp/adm/?action_open_photo_edit=true&capa=1&photo_numbers=1-2%0D%0A3-4%0D%0A5-6");
        expect(pcTM.buildSearchURLByPhotoNum("1-2\r\n3-4")).toBe("https://admin-app.photocreate.jp/adm/?action_open_photo_edit=true&capa=1&photo_numbers=1-2%0D%0A%0D%0A3-4");
    });

    test('buildJobcanLMSSearchURL', () => {
        expect(pcTM.buildJobcanLMSSearchURL("")).toBeUndefined();
        expect(pcTM.buildJobcanLMSSearchURL("あいうえお")).toBe("https://lms.jobcan.jp/employees?q=%E3%81%82%E3%81%84%E3%81%86%E3%81%88%E3%81%8A");
    });
});


describe("constructor with settings(adminAppUrl)", () => {
    test("settings.adminAppUrl", () => {
        const pcTM = new PCTamperMonkey({adminAppUrl: "https://adm2.pkm.jp/adm/"});
        expect(pcTM.settings.adminAppUrl).toBe("https://adm2.pkm.jp/adm/")
    });
});
describe("constructor with settings(no adminAppUrl)", () => {
    test("settings.adminAppUrl", () => {
        const pcTM = new PCTamperMonkey({otherProperty: "example"});
        expect(pcTM.settings.adminAppUrl).toBe("https://admin-app.photocreate.jp/adm/");
    });
});


