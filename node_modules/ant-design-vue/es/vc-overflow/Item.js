import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import { computed, defineComponent, onUnmounted, ref } from 'vue';
import ResizeObserver from '../vc-resize-observer';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
var UNDEFINED = undefined;
export default defineComponent({
  name: 'Item',
  props: {
    prefixCls: String,
    item: PropTypes.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: [String, Number],
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: PropTypes.any,
    invalidate: Boolean
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        expose = _ref.expose;
    var mergedHidden = computed(function () {
      return props.responsive && !props.display;
    });
    var itemNodeRef = ref();
    expose({
      itemNodeRef: itemNodeRef
    }); // ================================ Effect ================================

    function internalRegisterSize(width) {
      props.registerSize(props.itemKey, width);
    }

    onUnmounted(function () {
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

      var itemNode = _createVNode(Component, _objectSpread(_objectSpread(_objectSpread({
        "class": classNames(!invalidate && prefixCls),
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

        itemNode = _createVNode(ResizeObserver, {
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