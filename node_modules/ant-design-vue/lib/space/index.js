"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _propsUtil = require("../_util/props-util");

var _type = require("../_util/type");

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _useFlexGapSupport = _interopRequireDefault(require("../_util/hooks/useFlexGapSupport"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
var spaceProps = {
  prefixCls: _vueTypes.default.string,
  size: {
    type: [String, Number, Array]
  },
  direction: _vueTypes.default.oneOf((0, _type.tuple)('horizontal', 'vertical')).def('horizontal'),
  align: _vueTypes.default.oneOf((0, _type.tuple)('start', 'end', 'center', 'baseline')),
  wrap: _vueTypes.default.looseBool
};

function getNumberSize(size) {
  return typeof size === 'string' ? spaceSize[size] : size || 0;
}

var Space = (0, _vue.defineComponent)({
  name: 'ASpace',
  props: spaceProps,
  slots: ['split'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = (0, _useConfigInject2.default)('space', props),
        prefixCls = _useConfigInject.prefixCls,
        space = _useConfigInject.space,
        directionConfig = _useConfigInject.direction;

    var supportFlexGap = (0, _useFlexGapSupport.default)();
    var size = (0, _vue.computed)(function () {
      var _a;

      return props.size || ((_a = space.value) === null || _a === void 0 ? void 0 : _a.size) || 'small';
    });
    var horizontalSize = (0, _vue.ref)();
    var verticalSize = (0, _vue.ref)();
    (0, _vue.watch)(size, function () {
      var _map = (Array.isArray(size.value) ? size.value : [size.value, size.value]).map(function (item) {
        return getNumberSize(item);
      });

      var _map2 = _slicedToArray(_map, 2);

      horizontalSize.value = _map2[0];
      verticalSize.value = _map2[1];
    }, {
      immediate: true
    });
    var mergedAlign = (0, _vue.computed)(function () {
      return props.align === undefined && props.direction === 'horizontal' ? 'center' : props.align;
    });
    var cn = (0, _vue.computed)(function () {
      var _classNames;

      return (0, _classNames2.default)(prefixCls.value, "".concat(prefixCls.value, "-").concat(props.direction), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), directionConfig.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-align-").concat(mergedAlign.value), mergedAlign.value), _classNames));
    });
    var marginDirection = (0, _vue.computed)(function () {
      return directionConfig.value === 'rtl' ? 'marginLeft' : 'marginRight';
    });
    var style = (0, _vue.computed)(function () {
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
      var items = (0, _propsUtil.filterEmpty)((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      var len = items.length;

      if (len === 0) {
        return null;
      }

      var split = (_b = slots.split) === null || _b === void 0 ? void 0 : _b.call(slots);
      var itemClassName = "".concat(prefixCls.value, "-item");
      var horizontalSizeVal = horizontalSize.value;
      var latestIndex = len - 1;
      return (0, _vue.createVNode)("div", {
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

        return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("div", {
          "class": itemClassName,
          "style": itemStyle
        }, [child]), index < latestIndex && split && (0, _vue.createVNode)("span", {
          "class": "".concat(itemClassName, "-split"),
          "style": itemStyle
        }, [split])]);
      })]);
    };
  }
});

var _default = (0, _type.withInstall)(Space);

exports.default = _default;