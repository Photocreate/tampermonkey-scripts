"use strict";

require("./pcTamperMonkey.js");

//require './pcTamperMonkey';
console.info(new PCTamperMonkey());
console.info(PCTamperMonkey.replaceFullToHalf);
test('hoge', function () {
  expect(PCTamperMonkey.adminAppUrl).toBe("");
});