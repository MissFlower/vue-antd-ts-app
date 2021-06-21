import { createVNode as _createVNode, Fragment as _Fragment } from "vue";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { defineComponent, computed, ref, watch } from 'vue';
import PropTypes from '../_util/vue-types';
import { filterEmpty } from '../_util/props-util';
import { tuple, withInstall } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
import useFlexGapSupport from '../_util/hooks/useFlexGapSupport';
import classNames from '../_util/classNames';
var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
var spaceProps = {
  prefixCls: PropTypes.string,
  size: {
    type: [String, Number, Array]
  },
  direction: PropTypes.oneOf(tuple('horizontal', 'vertical')).def('horizontal'),
  align: PropTypes.oneOf(tuple('start', 'end', 'center', 'baseline')),
  wrap: PropTypes.looseBool
};

function getNumberSize(size) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

var Space = defineComponent({
  name: 'ASpace',
  props: spaceProps,
  slots: ['split'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = useConfigInject('space', props),
        prefixCls = _useConfigInject.prefixCls,
        space = _useConfigInject.space,
        directionConfig = _useConfigInject.direction;

    var supportFlexGap = useFlexGapSupport();
    var size = computed(function () {
      var _a;

      return props.size || ((_a = space.value) === null || _a === void 0 ? void 0 : _a.size) || 'small';
    });
    var horizontalSize = ref();
    var verticalSize = ref();
    watch(size, function () {
      var _map = (Array.isArray(size.value) ? size.value : [size.value, size.value]).map(function (item) {
        return getNumberSize(item);
      });

      var _map2 = _slicedToArray(_map, 2);

      horizontalSize.value = _map2[0];
      verticalSize.value = _map2[1];
    }, {
      immediate: true
    });
    var mergedAlign = computed(function () {
      return props.align === undefined && props.direction === 'horizontal' ? 'center' : props.align;
    });
    var cn = computed(function () {
      var _classNames;

      return classNames(prefixCls.value, "".concat(prefixCls.value, "-").concat(props.direction), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), directionConfig.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-align-").concat(mergedAlign.value), mergedAlign.value), _classNames));
    });
    var marginDirection = computed(function () {
      return directionConfig.value === 'rtl' ? 'marginLeft' : 'marginRight';
    });
    var style = computed(function () {
      var gapStyle = {};

      if (supportFlexGap) {
        gapStyle.columnGap = "".concat(horizontalSize.value, "px");
        gapStyle.rowGap = "".concat(verticalSize.value, "px");
      }

      return _extends(_extends({}, gapStyle), props.wrap && {
        flexWrap: 'wrap',
        marginBottom: "".concat(-verticalSize.value, "px")
      });
    });
    return function () {
      var _a, _b;

      var wrap = props.wrap,
          _props$direction = props.direction,
          direction = _props$direction === void 0 ? 'horizontal' : _props$direction;
      var items = filterEmpty((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      var len = items.length;

      if (len === 0) {
        return null;
      }

      var split = (_b = slots.split) === null || _b === void 0 ? void 0 : _b.call(slots);
      var itemClassName = "".concat(prefixCls.value, "-item");
      var horizontalSizeVal = horizontalSize.value;
      var latestIndex = len - 1;
      return _createVNode("div", {
        "class": cn.value,
        "style": style.value
      }, [items.map(function (child, index) {
        var itemStyle = {};

        if (!supportFlexGap) {
          if (direction === 'vertical') {
            if (index < latestIndex) {
              itemStyle = {
                marginBottom: "".concat(horizontalSizeVal / (split ? 2 : 1), "px")
              };
            }
          } else {
            itemStyle = _extends(_extends({}, index < latestIndex && _defineProperty({}, marginDirection.value, "".concat(horizontalSizeVal / (split ? 2 : 1), "px"))), wrap && {
              paddingBottom: "".concat(verticalSize.value, "px")
            });
          }
        }

        return _createVNode(_Fragment, null, [_createVNode("div", {
          "class": itemClassName,
          "style": itemStyle
        }, [child]), index < latestIndex && split && _createVNode("span", {
          "class": "".concat(itemClassName, "-split"),
          "style": itemStyle
        }, [split])]);
      })]);
    };
  }
});
export default withInstall(Space);