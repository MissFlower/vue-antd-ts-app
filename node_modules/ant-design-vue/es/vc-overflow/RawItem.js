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

import { defineComponent } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { OverflowContextProvider, useInjectOverflowContext } from './context';
import Item from './Item';
export default defineComponent({
  name: 'RawItem',
  inheritAttrs: false,
  props: {
    component: PropTypes.any,
    title: PropTypes.any
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    var context = useInjectOverflowContext();
    return function () {
      var _a, _b; // Render directly when context not provided


      if (!context.value) {
        var _props$component = props.component,
            Component = _props$component === void 0 ? 'div' : _props$component,
            _restProps = __rest(props, ["component"]);

        return _createVNode(Component, _objectSpread(_objectSpread({}, _restProps), attrs), {
          default: function _default() {
            return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
          }
        });
      }

      var _c = context.value,
          contextClassName = _c.className,
          restContext = __rest(_c, ["className"]);

      var className = attrs.class,
          restProps = __rest(attrs, ["class"]); // Do not pass context to sub item to avoid multiple measure


      return _createVNode(OverflowContextProvider, {
        "value": null
      }, {
        default: function _default() {
          return [_createVNode(Item, _objectSpread(_objectSpread(_objectSpread({
            "class": classNames(contextClassName, className)
          }, restContext), restProps), props), {
            default: function _default() {
              return [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)];
            }
          })];
        }
      });
    };
  }
});