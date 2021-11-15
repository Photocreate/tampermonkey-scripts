//require './pcTamperMonkey';
const {PCTamperMonkey} = require("../src/pcTamperMonkey.js");

test('static method: replaceFullTOHalf', () => {
    expect(PCTamperMonkey.replaceFullToHalf("０")).toBe("0");
});


test('settings', () => {
    const pcTM = new PCTamperMonkey();
    expect(pcTM.settings.adminAppUrl).toBe("https://admin-app.photocreate.jp/adm/")
});

test('buildGoogleCloudSearchURL', () => {
    const pcTM = new PCTamperMonkey();
    expect(pcTM.buildGoogleCloudSearchURL("hoge")).toBe("https://cloudsearch.google.com/cloudsearch/search?q=hoge");
});

test('buildSearchURLByEventId', () => {
    const pcTM = new PCTamperMonkey();
    expect(pcTM.buildSearchURLByEventId("E123")).toBe("https://admin-app.photocreate.jp/adm/?action_event_info=true&events_id=123");
});
test('buildSearchURLByEventName', () => {
    const pcTM = new PCTamperMonkey();
    expect(pcTM.buildSearchURLByEventName("ああああ")).toBe("https://admin-app.photocreate.jp/adm/?action_event_search_form=true&action_event_search_result=true&event_name=%E3%81%82%E3%81%82%E3%81%82%E3%81%82#result");
});
test('buildSearchURLByOrderNum', () => {
    const pcTM = new PCTamperMonkey();
    expect(pcTM.buildSearchURLByOrderNum("12345678")).toBe("https://admin-app.photocreate.jp/adm/?action_support_order_detail=true&order_num=12345678#result");
});
test('buildSearchURLByPhotoNum', () => {
    const pcTM = new PCTamperMonkey();
    expect(pcTM.buildSearchURLByPhotoNum("1234-5678")).toBe("https://admin-app.photocreate.jp/adm/?action_open_photo_edit=true&capa=1&photo_numbers=1234-5678");
});
