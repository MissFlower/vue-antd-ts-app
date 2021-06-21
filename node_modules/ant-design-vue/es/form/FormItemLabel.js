import { createVNode as _createVNode, Fragment as _Fragment } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Col from '../grid/Col';
import { useInjectForm } from './context';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale/default';
import classNames from '../_util/classNames';

var FormItemLabel = function FormItemLabel(props, _ref) {
  var _classNames;

  var slots = _ref.slots,
      emit = _ref.emit,
      attrs = _ref.attrs;

  var _a, _b, _c, _d, _e;

  var _Object$assign = _extends(_extends({}, props), attrs),
      prefixCls = _Object$assign.prefixCls,
      htmlFor = _Object$assign.htmlFor,
      labelCol = _Object$assign.labelCol,
      labelAlign = _Object$assign.labelAlign,
      colon = _Object$assign.colon,
      required = _Object$assign.required,
      requiredMark = _Object$assign.requiredMark;

  var _useLocaleReceiver = useLocaleReceiver('Form'),
      _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
      formLocale = _useLocaleReceiver2[0];

  var label = (_a = props.label) !== null && _a !== void 0 ? _a : (_b = slots.label) === null || _b === void 0 ? void 0 : _b.call(slots);
  if (!label) return null;

  var _useInjectForm = useInjectForm(),
      vertical = _useInjectForm.vertical,
      contextLabelAlign = _useInjectForm.labelAlign,
      contextLabelCol = _useInjectForm.labelCol,
      contextColon = _useInjectForm.colon;

  var mergedLabelCol = labelCol || (contextLabelCol === null || contextLabelCol === void 0 ? void 0 : contextLabelCol.value) || {};
  var mergedLabelAlign = labelAlign || (contextLabelAlign === null || contextLabelAlign === void 0 ? void 0 : contextLabelAlign.value);
  var labelClsBasic = "".concat(prefixCls, "-item-label");
  var labelColClassName = classNames(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.class);
  var labelChildren = label; // Keep label is original where there should have no colon

  var computedColon = colon === true || (contextColon === null || contextColon === void 0 ? void 0 : contextColon.value) !== false && colon !== false;
  var haveColon = computedColon && !vertical.value; // Remove duplicated user input colon

  if (haveColon && typeof label === 'string' && label.trim() !== '') {
    labelChildren = label.replace(/[:|：]\s*$/, '');
  }

  labelChildren = _createVNode(_Fragment, null, [labelChildren, (_c = slots.tooltip) === null || _c === void 0 ? void 0 : _c.call(slots, {
    class: "".concat(prefixCls, "-item-tooltip")
  })]); // Add required mark if optional

  if (requiredMark === 'optional' && !required) {
    labelChildren = _createVNode(_Fragment, null, [labelChildren, _createVNode("span", {
      "class": "".concat(prefixCls, "-item-optional")
    }, [((_d = formLocale.value) === null || _d === void 0 ? void 0 : _d.optional) || ((_e = defaultLocale.Form) === null || _e === void 0 ? void 0 : _e.optional)])]);
  }

  var labelClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item-required"), required), _defineProperty(_classNames, "".concat(prefixCls, "-item-required-mark-optional"), requiredMark === 'optional'), _defineProperty(_classNames, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames));
  return _createVNode(Col, _objectSpread(_objectSpread({}, mergedLabelCol), {}, {
    "class": labelColClassName
  }), {
    default: function _default() {
      return [_createVNode("label", {
        "html-for": htmlFor,
        "class": labelClassName,
        "title": typeof label === 'string' ? label : '',
        "onClick": function onClick(e) {
          return emit('click', e);
        }
      }, [labelChildren])];
    }
  });
};

FormItemLabel.displayName = 'FormItemLabel';
FormItemLabel.inheritAttrs = false;
export default FormItemLabel;