"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Badge = _interopRequireDefault(require("./Badge"));

var _Ribbon = _interopRequireDefault(require("./Ribbon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Badge.default.install = function (app) {
  app.component(_Badge.default.name, _Badge.default);
  app.component(_Ribbon.default.name, _Ribbon.default);
  return app;
};

var _default = _Badge.default;
exports.default = _default;