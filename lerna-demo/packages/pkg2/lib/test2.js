"use strict";

const vue = require("vue");

console.log(vue.version);

const _ = require("lodash");
function test2() {
  console.log(_.camelCase("a_string"));
}
test2();
module.exports = test2;

const pkg1 = require("pkg1");

console.log(pkg1.test1);
