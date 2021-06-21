"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _KeyCode = _interopRequireDefault(require("./KeyCode"));

var _vueTypes = _interopRequireDefault(require("./vue-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var inlineStyle = {
  border: 0,
  background: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  display: 'inline-block'
};
var TransButton = (0, _vue.defineComponent)({
  name: 'TransButton',
  inheritAttrs: false,
  props: {
    noStyle: _vueTypes.default.looseBool,
    onClick: _vueTypes.default.func,
    disabled: _vueTypes.default.looseBool,
    autofocus: _vueTypes.default.looseBool
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit,
        attrs = _ref.attrs,
        expose = _ref.expose;
    var domRef = (0, _vue.ref)();

    var onKeyDown = function onKeyDown(event) {
      var keyCode = event.keyCode;

      if (keyCode === _KeyCode.default.ENTER) {
        event.preventDefault();
      }
    };

    var onKeyUp = function onKeyUp(event) {
      var keyCode = event.keyCode;

      if (keyCode === _KeyCode.default.ENTER) {
        emit('click', event);
      }
    };

    var onClick = function onClick(e) {
      emit('click', e);
    };

    var focus = function focus() {
      if (domRef.value) {
        domRef.value.focus();
      }
    };

    var blur = function blur() {
      if (domRef.value) {
        domRef.value.blur();
      }
    };

    (0, _vue.onMounted)(function () {
      if (props.autofocus) {
        focus();
      }
    });
    expose({
      focus: focus,
      blur: blur
    });
    return function () {
      var _a;

      var noStyle = props.noStyle,
          disabled = props.disabled,
          restProps = __rest(props, ["noStyle", "disabled"]);

      var mergedStyle = {};

      if (!noStyle) {
        mergedStyle = _extends({}, inlineStyle);
      }

      if (disabled) {
        mergedStyle.pointerEvents = 'none';
      }

      return (0, _vue.createVNode)("div", _objectSpread(_objectSpread(_objectSpread({
        "role": "button",
        "tabindex": 0,
        "ref": domRef
      }, restProps), attrs), {}, {
        "onClick": onClick,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp,
        "style": _extends(_extends({}, mergedStyle), attrs.style || {})
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var _default = TransButton;
exports.default = _default;