"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Hex(q, r, s) {
  var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  return { q: q, r: r, s: s, props: props };
}

exports.default = Hex;