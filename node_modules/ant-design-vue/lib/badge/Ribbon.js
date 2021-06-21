"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _type = require("../_util/type");

var _utils = require("./utils");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ribbonProps = {
  prefix: _vueTypes.default.string,
  color: {
    type: String
  },
  text: _vueTypes.default.any,
  placement: _vueTypes.default.oneOf((0, _type.tuple)('start', 'end')).def('end')
};

var _default = (0, _vue.defineComponent)({
  name: 'ABadgeRibbon',
  inheritAttrs: false,
  props: ribbonProps,
  slots: ['text'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('ribbon', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var colorInPreset = (0, _vue.computed)(function () {
      return (0, _utils.isPresetColor)(props.color);
    });
    var ribbonCls = (0, _vue.computed)(function () {
      var _ref2;

      return [prefixCls.value, "".concat(prefixCls.value, "-placement-").concat(props.placement), (_ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_ref2, "".concat(prefixCls.value, "-color-").concat(props.color), colorInPreset.value), _ref2)];
    });
    return function () {
      var _a, _b;

      var className = attrs.class,
          style = attrs.style,
          restAttrs = __rest(attrs, ["class", "style"]);

      var colorStyle = {};
      var cornerColorStyle = {};

      if (props.color && !colorInPreset.value) {
        colorStyle.background = props.color;
        cornerColorStyle.color = props.color;
      }

      return (0, _vue.createVNode)("div", _objectSpread({
        "class": "".concat(prefixCls.value, "-wrapper")
      }, restAttrs), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots), (0, _vue.createVNode)("div", {
        "class": [ribbonCls.value, className],
        "style": _extends(_extends({}, colorStyle), style)
      }, [(0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls.value, "-text")
      }, [props.text || ((_b = slots.text) === null || _b === void 0 ? void 0 : _b.call(slots))]), (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-corner"),
        "style": cornerColorStyle
      }, null)])]);
    };
  }
});

exports.default = _default;