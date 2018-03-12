"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oldNumber = oldNumber;

exports.default = function (a, b) {
  var strictClockwise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var angle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var start = +a;
  var end = b;
  if (strictClockwise) {
    if (end < angle && angle < start) {
      //end < angle < start
      end += 360;
    }
    if (start < angle && angle < end) {
      start += 360;
    }
  }
  return function (t) {
    return start + (end - start) * t;
  };
};

/* eslint no-console: 0 */
function oldNumber(a, b) {
  return a = +a, b -= a, function (t) {
    return a + b * t;
  };
}
