"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.backTopProps = void 0;

var _vue = require("vue");

var _VerticalAlignTopOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/VerticalAlignTopOutlined"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _addEventListener = _interopRequireDefault(require("../vc-util/Dom/addEventListener"));

var _getScroll = _interopRequireDefault(require("../_util/getScroll"));

var _transition = require("../_util/transition");

var _configProvider = require("../config-provider");

var _scrollTo = _interopRequireDefault(require("../_util/scrollTo"));

var _type = require("../_util/type");

var _throttleByAnimationFrame = _interopRequireDefault(require("../_util/throttleByAnimationFrame"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var backTopProps = {
  visibilityHeight: _vueTypes.default.number.def(400),
  duration: _vueTypes.default.number.def(450),
  target: Function,
  prefixCls: _vueTypes.default.string,
  onClick: _vueTypes.default.func // visible: PropTypes.looseBool, // Only for test. Don't use it.

};
exports.backTopProps = backTopProps;
var BackTop = (0, _vue.defineComponent)({
  name: 'ABackTop',
  inheritAttrs: false,
  props: backTopProps,
  emits: ['click'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;
    var configProvider = (0, _vue.inject)('configProvider', _configProvider.defaultConfigProvider);
    var domRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      visible: false,
      scrollEvent: null
    });

    var getDefaultTarget = function getDefaultTarget() {
      return domRef.value && domRef.value.ownerDocument ? domRef.value.ownerDocument : window;
    };

    var scrollToTop = function scrollToTop(e) {
      var _props$target = props.target,
          target = _props$target === void 0 ? getDefaultTarget : _props$target,
          duration = props.duration;
      (0, _scrollTo.default)(0, {
        getContainer: target,
        duration: duration
      });
      emit('click', e);
    };

    var handleScroll = (0, _throttleByAnimationFrame.default)(function (e) {
      var visibilityHeight = props.visibilityHeight;
      var scrollTop = (0, _getScroll.default)(e.target, true);
      state.visible = scrollTop > visibilityHeight;
    });

    var bindScrollEvent = function bindScrollEvent() {
      var target = props.target;
      var getTarget = target || getDefaultTarget;
      var container = getTarget();
      state.scrollEvent = (0, _addEventListener.default)(container, 'scroll', function (e) {
        handleScroll(e);
      });
      handleScroll({
        target: container
      });
    };

    var scrollRemove = function scrollRemove() {
      if (state.scrollEvent) {
        state.scrollEvent.remove();
      }

      handleScroll.cancel();
    };

    (0, _vue.watch)(function () {
      return props.target;
    }, function () {
      scrollRemove();
      (0, _vue.nextTick)(function () {
        bindScrollEvent();
      });
    });
    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        bindScrollEvent();
      });
    });
    (0, _vue.onActivated)(function () {
      (0, _vue.nextTick)(function () {
        bindScrollEvent();
      });
    });
    (0, _vue.onDeactivated)(function () {
      scrollRemove();
    });
    (0, _vue.onBeforeUnmount)(function () {
      scrollRemove();
    });
    var prefixCls = (0, _vue.computed)(function () {
      return configProvider.getPrefixCls('back-top', props.prefixCls);
    });
    return function () {
      var _class;

      var _a;

      var defaultElement = (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-content")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-icon")
      }, [(0, _vue.createVNode)(_VerticalAlignTopOutlined.default, null, null)])]);

      var divProps = _extends(_extends({}, attrs), {
        onClick: scrollToTop,
        class: (_class = {}, _defineProperty(_class, "".concat(prefixCls.value), true), _defineProperty(_class, "".concat(attrs.class), attrs.class), _defineProperty(_class, "".concat(prefixCls.value, "-rtl"), configProvider.direction === 'rtl'), _class)
      });

      var backTopBtn = state.visible ? (0, _vue.createVNode)("div", _objectSpread(_objectSpread({}, divProps), {}, {
        "ref": domRef
      }), [((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || defaultElement]) : null;
      var transitionProps = (0, _transition.getTransitionProps)('fade');
      return (0, _vue.createVNode)(_transition.Transition, transitionProps, {
        default: function _default() {
          return [backTopBtn];
        }
      });
    };
  }
});

var _default2 = (0, _type.withInstall)(BackTop);

exports.default = _default2;