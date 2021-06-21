"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.skeletonElementProps = void 0;

var _vue = require("vue");

var _classNames3 = _interopRequireDefault(require("../_util/classNames"));

var _type = require("../_util/type");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var skeletonElementProps = function skeletonElementProps() {
  return {
    prefixCls: _vueTypes.default.string,
    size: _vueTypes.default.oneOfType([_vueTypes.default.oneOf((0, _type.tuple)('large', 'small', 'default')), _vueTypes.default.number]),
    shape: _vueTypes.default.oneOf((0, _type.tuple)('circle', 'square', 'round')),
    active: _vueTypes.default.looseBool
  };
};

exports.skeletonElementProps = skeletonElementProps;

var Element = function Element(props) {
  var _classNames, _classNames2;

  var prefixCls = props.prefixCls,
      size = props.size,
      shape = props.shape;
  var sizeCls = (0, _classNames3.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
  var shapeCls = (0, _classNames3.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-circle"), shape === 'circle'), _defineProperty(_classNames2, "".concat(prefixCls, "-square"), shape === 'square'), _defineProperty(_classNames2, "".concat(prefixCls, "-round"), shape === 'round'), _classNames2));
  var sizeStyle = typeof size === 'number' ? {
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    lineHeight: "".concat(size, "px")
  } : {};
  return (0, _vue.createVNode)("span", {
    "class": (0, _classNames3.default)(prefixCls, sizeCls, shapeCls),
    "style": sizeStyle
  }, null);
};

Element.displayName = 'SkeletonElement';
var _default = Element;
exports.default = _default;