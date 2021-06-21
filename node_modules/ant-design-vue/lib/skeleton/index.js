"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "skeletonProps", {
  enumerable: true,
  get: function get() {
    return _Skeleton.skeletonProps;
  }
});
exports.default = void 0;

var _Skeleton = _interopRequireWildcard(require("./Skeleton"));

var _Button = _interopRequireDefault(require("./Button"));

var _Input = _interopRequireDefault(require("./Input"));

var _Image = _interopRequireDefault(require("./Image"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_Skeleton.default.Button = _Button.default;
_Skeleton.default.Avatar = _Avatar.default;
_Skeleton.default.Input = _Input.default;
_Skeleton.default.Image = _Image.default;
/* istanbul ignore next */

_Skeleton.default.install = function (app) {
  app.component(_Skeleton.default.name, _Skeleton.default);
  app.component(_Skeleton.default.Button.name, _Button.default);
  app.component(_Skeleton.default.Avatar.name, _Avatar.default);
  app.component(_Skeleton.default.Input.name, _Input.default);
  app.component(_Skeleton.default.Image.name, _Image.default);
  return app;
};

var _default = _Skeleton.default;
exports.default = _default;