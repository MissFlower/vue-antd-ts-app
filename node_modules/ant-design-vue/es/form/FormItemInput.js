import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';
import CheckCircleFilled from '@ant-design/icons-vue/CheckCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons-vue/ExclamationCircleFilled';
import Col from '../grid/Col';
import { useProvideForm, useInjectForm, useProvideFormItemPrefix } from './context';
import ErrorList from './ErrorList';
import classNames from '../_util/classNames';
import { computed, defineComponent, onUnmounted } from 'vue';
var iconMap = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
  validating: LoadingOutlined
};
var FormItemInput = defineComponent({
  slots: ['help', 'extra', 'errors'],
  inheritAttrs: false,
  props: ['prefixCls', 'errors', 'hasFeedback', 'validateStatus', 'onDomErrorVisibleChange', 'wrapperCol', 'help', 'extra', 'status'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var formContext = useInjectForm();
    var contextWrapperCol = formContext.wrapperCol; // Pass to sub FormItem should not with col info

    var subFormContext = _extends({}, formContext);

    delete subFormContext.labelCol;
    delete subFormContext.wrapperCol;
    useProvideForm(subFormContext);
    useProvideFormItemPrefix({
      prefixCls: computed(function () {
        return props.prefixCls;
      }),
      status: computed(function () {
        return props.status;
      })
    });
    onUnmounted(function () {
      props.onDomErrorVisibleChange(false);
    });
    return function () {
      var _a, _b, _c, _d;

      var prefixCls = props.prefixCls,
          wrapperCol = props.wrapperCol,
          _props$help = props.help,
          help = _props$help === void 0 ? (_a = slots.help) === null || _a === void 0 ? void 0 : _a.call(slots) : _props$help,
          _props$errors = props.errors,
          errors = _props$errors === void 0 ? (_b = slots.errors) === null || _b === void 0 ? void 0 : _b.call(slots) : _props$errors,
          onDomErrorVisibleChange = props.onDomErrorVisibleChange,
          hasFeedback = props.hasFeedback,
          validateStatus = props.validateStatus,
          _props$extra = props.extra,
          extra = _props$extra === void 0 ? (_c = slots.extra) === null || _c === void 0 ? void 0 : _c.call(slots) : _props$extra;
      var baseClassName = "".concat(prefixCls, "-item");
      var mergedWrapperCol = wrapperCol || (contextWrapperCol === null || contextWrapperCol === void 0 ? void 0 : contextWrapperCol.value) || {};
      var className = classNames("".concat(baseClassName, "-control"), mergedWrapperCol.class); // Should provides additional icon if `hasFeedback`

      var IconNode = validateStatus && iconMap[validateStatus];
      var icon = hasFeedback && IconNode ? _createVNode("span", {
        "class": "".concat(baseClassName, "-children-icon")
      }, [_createVNode(IconNode, null, null)]) : null;

      var inputDom = _createVNode("div", {
        "class": "".concat(baseClassName, "-control-input")
      }, [_createVNode("div", {
        "class": "".concat(baseClassName, "-control-input-content")
      }, [(_d = slots.default) === null || _d === void 0 ? void 0 : _d.call(slots)]), icon]);

      var errorListDom = _createVNode(ErrorList, {
        "errors": errors,
        "help": help,
        "onDomErrorVisibleChange": onDomErrorVisibleChange
      }, null); // If extra = 0, && will goes wrong
      // 0&&error -> 0


      var extraDom = extra ? _createVNode("div", {
        "class": "".concat(baseClassName, "-extra")
      }, [extra]) : null;
      return _createVNode(Col, _objectSpread(_objectSpread({}, mergedWrapperCol), {}, {
        "class": className
      }), {
        default: function _default() {
          return [inputDom, errorListDom, extraDom];
        }
      });
    };
  }
});
export default FormItemInput;