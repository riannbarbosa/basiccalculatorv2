"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _calc = require("./calc");
var calcs = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _calc.plus)(2, 2);
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function calcs() {
    return _ref.apply(this, arguments);
  };
}();
calcs();