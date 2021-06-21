"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuContextProvider = exports.useInjectFirstLevel = exports.useProvideFirstLevel = exports.MenuFirstLevelContextKey = exports.useInjectMenu = exports.MenuContextKey = exports.useProvideMenu = void 0;

var _vue = require("vue");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MenuContextKey = Symbol('menuContextKey');
exports.MenuContextKey = MenuContextKey;

var useProvideMenu = function useProvideMenu(props) {
  (0, _vue.provide)(MenuContextKey, props);
};

exports.useProvideMenu = useProvideMenu;

var useInjectMenu = function useInjectMenu() {
  return (0, _vue.inject)(MenuContextKey);
};

exports.useInjectMenu = useInjectMenu;
var MenuFirstLevelContextKey = Symbol('menuFirstLevelContextKey');
exports.MenuFirstLevelContextKey = MenuFirstLevelContextKey;

var useProvideFirstLevel = function useProvideFirstLevel(firstLevel) {
  (0, _vue.provide)(MenuFirstLevelContextKey, firstLevel);
};

exports.useProvideFirstLevel = useProvideFirstLevel;

var useInjectFirstLevel = function useInjectFirstLevel() {
  return (0, _vue.inject)(MenuFirstLevelContextKey, true);
};

exports.useInjectFirstLevel = useInjectFirstLevel;
var MenuContextProvider = (0, _vue.defineComponent)({
  name: 'MenuContextProvider',
  inheritAttrs: false,
  props: {
    props: Object
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    useProvideMenu(_extends(_extends({}, useInjectMenu()), props.props));
    return function () {
      var _a;

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
exports.MenuContextProvider = MenuContextProvider;
var _default = useProvideMenu;
exports.default = _default;