import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import StatisticNumber from './Number';
import Skeleton from '../skeleton/Skeleton';
import useConfigInject from '../_util/hooks/useConfigInject';
export var StatisticProps = {
  prefixCls: PropTypes.string,
  decimalSeparator: PropTypes.string,
  groupSeparator: PropTypes.string,
  format: PropTypes.string,
  value: {
    type: [String, Number, Object]
  },
  valueStyle: PropTypes.style,
  valueRender: PropTypes.any,
  formatter: PropTypes.any,
  precision: PropTypes.number,
  prefix: PropTypes.VNodeChild,
  suffix: PropTypes.VNodeChild,
  title: PropTypes.VNodeChild,
  onFinish: PropTypes.func,
  loading: PropTypes.looseBool
};
export default defineComponent({
  name: 'AStatistic',
  props: initDefaultProps(StatisticProps, {
    decimalSeparator: '.',
    groupSeparator: ',',
    loading: false
  }),
  slots: ['title', 'prefix', 'suffix', 'formatter'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = useConfigInject('statistic', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    return function () {
      var _a, _b, _c, _d, _e, _f, _g;

      var _props$value = props.value,
          value = _props$value === void 0 ? 0 : _props$value,
          valueStyle = props.valueStyle,
          valueRender = props.valueRender;
      var pre = prefixCls.value;
      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var prefix = (_c = props.prefix) !== null && _c !== void 0 ? _c : (_d = slots.prefix) === null || _d === void 0 ? void 0 : _d.call(slots);
      var suffix = (_e = props.suffix) !== null && _e !== void 0 ? _e : (_f = slots.suffix) === null || _f === void 0 ? void 0 : _f.call(slots);
      var formatter = (_g = props.formatter) !== null && _g !== void 0 ? _g : slots.formatter; // data-for-update just for update component
      // https://github.com/vueComponent/ant-design-vue/pull/3170

      var valueNode = _createVNode(StatisticNumber, _objectSpread({
        "data-for-update": Date.now()
      }, _extends(_extends({}, props), {
        prefixCls: pre,
        value: value,
        formatter: formatter
      })), null);

      if (valueRender) {
        valueNode = valueRender(valueNode);
      }

      return _createVNode("div", {
        "class": [pre, _defineProperty({}, "".concat(pre, "-rtl"), direction.value === 'rtl')]
      }, [title && _createVNode("div", {
        "class": "".concat(pre, "-title")
      }, [title]), _createVNode(Skeleton, {
        "paragraph": false,
        "loading": props.loading
      }, {
        default: function _default() {
          return [_createVNode("div", {
            "style": valueStyle,
            "class": "".concat(pre, "-content")
          }, [prefix && _createVNode("span", {
            "class": "".concat(pre, "-content-prefix")
          }, [prefix]), valueNode, suffix && _createVNode("span", {
            "class": "".concat(pre, "-content-suffix")
          }, [suffix])])];
        }
      })]);
    };
  }
});