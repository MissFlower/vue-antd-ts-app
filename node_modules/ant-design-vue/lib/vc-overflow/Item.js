"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));

var _classNames = _interopRequireDefault(require("../_util/classNames"));

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var UNDEFINED = undefined;

var _default2 = (0, _vue.defineComponent)({
  name: 'Item',
  props: {
    prefixCls: String,
    item: _vueTypes.default.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: [String, Number],
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: _vueTypes.default.any,
    invalidate: Boolean
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        expose = _ref.expose;
    var mergedHidden = (0, _vue.computed)(function () {
      return props.responsive && !props.display;
    });
    var itemNodeRef = (0, _vue.ref)();
    expose({
      itemNodeRef: itemNodeRef
    }); // ================================ Effect ================================

    function internalRegisterSize(width) {
      props.registerSize(props.itemKey, width);
    }

    (0, _vue.onUnmounted)(function () {
      internalRegisterSize(null);
    });
    return function () {
      var _a;

      var prefixCls = props.prefixCls,
          invalidate = props.invalidate,
          item = props.item,
          renderItem = props.renderItem,
          responsive = props.responsive,
          registerSize = props.registerSize,
          itemKey = props.itemKey,
          display = props.display,
          order = props.order,
          _props$component = props.component,
          Component = _props$component === void 0 ? 'div' : _props$component,
          restProps = __rest(props, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]);

      var children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots); // ================================ Render ================================

      var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
      var overflowStyle;

      if (!invalidate) {
        overflowStyle = {
          opacity: mergedHidden.value ? 0 : 1,
          height: mergedHidden.value ? 0 : UNDEFINED,
          overflowY: mergedHidden.value ? 'hidden' : UNDEFINED,
          order: responsive ? order : UNDEFINED,
          pointerEvents: mergedHidden.value ? 'none' : UNDEFINED,
          position: mergedHidden.value ? 'absolute' : UNDEFINED
        };
      }

      var overflowProps = {};

      if (mergedHidden.value) {
        overflowProps['aria-hidden'] = true;
      }

      var itemNode = (0, _vue.createVNode)(Component, _objectSpread(_objectSpread(_objectSpread({
        "class": (0, _classNames.default)(!invalidate && prefixCls),
        "style": overflowStyle
      }, overflowProps), restProps), {}, {
        "ref": itemNodeRef
      }), {
        default: function _default() {
          return [childNode];
        }
      });

      if (responsive) {
        var _itemNode = function () {
          return itemNode;
        }();

        itemNode = (0, _vue.createVNode)(_vcResizeObserver.default, {
          "onResize": function onResize(_ref2) {
            var offsetWidth = _ref2.offsetWidth;
            internalRegisterSize(offsetWidth);
          }
        }, {
          default: function _default() {
            return [_itemNode];
          }
        });
      }

      return itemNode;
    };
  }
});

exports.default = _default2;