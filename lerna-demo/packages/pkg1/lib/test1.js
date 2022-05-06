"use strict";

const vue = require("vue");

console.log(vue.version);

const _ = require("lodash");
function test1() {
  console.log(_.camelCase("a_string"));
}
// test1();
module.exports = test1;
