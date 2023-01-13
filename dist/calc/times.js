"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _axios = _interopRequireDefault(require("axios"));
var times = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(x, y) {
    var encoded, response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            encoded = "https://api.mathjs.org/v4/?expr=".concat(x, "*").concat(y);
            _context.prev = 1;
            _context.next = 4;
            return _axios["default"].get(encoded);
          case 4:
            response = _context.sent;
            console.log(response.data);
            _context.next = 13;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            if (_context.t0.response) {
              console.error(_context.t0.response.data);
              console.error(_context.t0.response.status);
              console.error(_context.t0.response.headers);
            }
            if (_context.t0.request) console.log('GET request error', _context.t0.message);
            console.error(_context.t0.config);
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function times(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var _default = times;
exports["default"] = _default;