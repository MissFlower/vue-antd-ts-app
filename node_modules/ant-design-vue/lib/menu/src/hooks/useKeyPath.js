"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.KeyPathContext = exports.useInjectKeyPath = exports.useProvideKeyPath = void 0;

var _vue = require("vue");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var KeyPathContext = Symbol('KeyPathContext');
exports.KeyPathContext = KeyPathContext;

var useInjectKeyPath = function useInjectKeyPath() {
  return (0, _vue.inject)(KeyPathContext, {
    parentEventKeys: (0, _vue.computed)(function () {
      return [];
    }),
    parentKeys: (0, _vue.computed)(function () {
      return [];
    }),
    parentInfo: {}
  });
};

exports.useInjectKeyPath = useInjectKeyPath;

var useProvideKeyPath = function useProvideKeyPath(eventKey, key, menuInfo) {
  var _useInjectKeyPath = useInjectKeyPath(),
      parentEventKeys = _useInjectKeyPath.parentEventKeys,
      parentKeys = _useInjectKeyPath.parentKeys;

  var eventKeys = (0, _vue.computed)(function () {
    return [].concat(_toConsumableArray(parentEventKeys.value), [eventKey]);
  });
  var keys = (0, _vue.computed)(function () {
    return [].concat(_toConsumableArray(parentKeys.value), [key]);
  });
  (0, _vue.provide)(KeyPathContext, {
    parentEventKeys: eventKeys,
    parentKeys: keys,
    parentInfo: menuInfo
  });
  return keys;
};

exports.useProvideKeyPath = useProvideKeyPath;
var _default = useProvideKeyPath;
exports.default = _default;