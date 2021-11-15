//require './pcTamperMonkey';
import PCTamperMonkey from "../src/pcTamperMonkey.js";


test('hoge', () => {
    expect(PCTamperMonkey.replaceFullToHalf("０")).toBe("0");
    const pcTM = new PCTamperMonkey();
    expect(pcTM.settings.adminAppUrl).toBe("https://admin-app.photocreate.jp/adm/")
    expect(pcTM.buildGoogleCloudSearchURL("hoge")).toBe("https://cloudsearch.google.com/cloudsearch/search?q=hoge");
});
