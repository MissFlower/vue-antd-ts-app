import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { flattenChildren, getPropsSlot, isValidElement } from '../../_util/props-util';
import PropTypes from '../../_util/vue-types';
import { computed, defineComponent, getCurrentInstance, onBeforeUnmount, ref, watch } from 'vue';
import { useInjectKeyPath } from './hooks/useKeyPath';
import { useInjectFirstLevel, useInjectMenu } from './hooks/useMenuContext';
import { cloneElement } from '../../_util/vnode';
import Tooltip from '../../tooltip';
import KeyCode from '../../_util/KeyCode';
import useDirectionStyle from './hooks/useDirectionStyle';
import Overflow from '../../vc-overflow';
var indexGuid = 0;
var menuItemProps = {
  role: String,
  disabled: Boolean,
  danger: Boolean,
  title: {
    type: [String, Boolean],
    default: undefined
  },
  icon: PropTypes.VNodeChild
};
export default defineComponent({
  name: 'AMenuItem',
  inheritAttrs: false,
  props: menuItemProps,
  emits: ['mouseenter', 'mouseleave', 'click', 'keydown', 'focus'],
  slots: ['icon', 'title'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit,
        attrs = _ref.attrs;
    var instance = getCurrentInstance();
    var key = instance.vnode.key;
    var eventKey = "menu_item_".concat(++indexGuid, "_$$_").concat(key);

    var _useInjectKeyPath = useInjectKeyPath(),
        parentEventKeys = _useInjectKeyPath.parentEventKeys,
        parentKeys = _useInjectKeyPath.parentKeys;

    var _useInjectMenu = useInjectMenu(),
        prefixCls = _useInjectMenu.prefixCls,
        activeKeys = _useInjectMenu.activeKeys,
        disabled = _useInjectMenu.disabled,
        changeActiveKeys = _useInjectMenu.changeActiveKeys,
        rtl = _useInjectMenu.rtl,
        inlineCollapsed = _useInjectMenu.inlineCollapsed,
        siderCollapsed = _useInjectMenu.siderCollapsed,
        onItemClick = _useInjectMenu.onItemClick,
        selectedKeys = _useInjectMenu.selectedKeys,
        registerMenuInfo = _useInjectMenu.registerMenuInfo,
        unRegisterMenuInfo = _useInjectMenu.unRegisterMenuInfo;

    var firstLevel = useInjectFirstLevel();
    var isActive = ref(false);
    var keysPath = computed(function () {
      return [].concat(_toConsumableArray(parentKeys.value), [key]);
    }); // const keysPath = computed(() => [...parentEventKeys.value, eventKey]);

    var menuInfo = {
      eventKey: eventKey,
      key: key,
      parentEventKeys: parentEventKeys,
      parentKeys: parentKeys,
      isLeaf: true
    };
    registerMenuInfo(eventKey, menuInfo);
    onBeforeUnmount(function () {
      unRegisterMenuInfo(eventKey);
    });
    watch(activeKeys, function () {
      isActive.value = !!activeKeys.value.find(function (val) {
        return val === key;
      });
    }, {
      immediate: true
    });
    var mergedDisabled = computed(function () {
      return disabled.value || props.disabled;
    });
    var selected = computed(function () {
      return selectedKeys.value.includes(key);
    });
    var classNames = computed(function () {
      var _ref2;

      var itemCls = "".concat(prefixCls.value, "-item");
      return _ref2 = {}, _defineProperty(_ref2, "".concat(itemCls), true), _defineProperty(_ref2, "".concat(itemCls, "-danger"), props.danger), _defineProperty(_ref2, "".concat(itemCls, "-active"), isActive.value), _defineProperty(_ref2, "".concat(itemCls, "-selected"), selected.value), _defineProperty(_ref2, "".concat(itemCls, "-disabled"), mergedDisabled.value), _ref2;
    });

    var getEventInfo = function getEventInfo(e) {
      return {
        key: key,
        eventKey: eventKey,
        keyPath: keysPath.value,
        eventKeyPath: [].concat(_toConsumableArray(parentEventKeys.value), [eventKey]),
        domEvent: e
      };
    }; // ============================ Events ============================


    var onInternalClick = function onInternalClick(e) {
      if (mergedDisabled.value) {
        return;
      }

      var info = getEventInfo(e);
      emit('click', e);
      onItemClick(info);
    };

    var onMouseEnter = function onMouseEnter(event) {
      if (!mergedDisabled.value) {
        changeActiveKeys(keysPath.value);
        emit('mouseenter', event);
      }
    };

    var onMouseLeave = function onMouseLeave(event) {
      if (!mergedDisabled.value) {
        changeActiveKeys([]);
        emit('mouseleave', event);
      }
    };

    var onInternalKeyDown = function onInternalKeyDown(e) {
      emit('keydown', e);

      if (e.which === KeyCode.ENTER) {
        var info = getEventInfo(e); // Legacy. Key will also trigger click event

        emit('click', e);
        onItemClick(info);
      }
    };
    /**
     * Used for accessibility. Helper will focus element without key board.
     * We should manually trigger an active
     */


    var onInternalFocus = function onInternalFocus(e) {
      changeActiveKeys(keysPath.value);
      emit('focus', e);
    };

    var renderItemChildren = function renderItemChildren(icon, children) {
      var wrapNode = _createVNode("span", {
        "class": "".concat(prefixCls.value, "-title-content")
      }, [children]); // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456


      if (!icon || isValidElement(children) && children.type === 'span') {
        if (children && inlineCollapsed.value && firstLevel && typeof children === 'string') {
          return _createVNode("div", {
            "class": "".concat(prefixCls.value, "-inline-collapsed-noicon")
          }, [children.charAt(0)]);
        }
      }

      return wrapNode;
    }; // ========================== DirectionStyle ==========================


    var directionStyle = useDirectionStyle(computed(function () {
      return keysPath.value.length;
    }));
    return function () {
      var _ref3;

      var _a, _b, _c;

      var title = (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      var children = flattenChildren((_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots));
      var childrenLength = children.length;
      var tooltipTitle = title;

      if (typeof title === 'undefined') {
        tooltipTitle = firstLevel ? children : '';
      } else if (title === false) {
        tooltipTitle = '';
      }

      var tooltipProps = {
        title: tooltipTitle
      };

      if (!siderCollapsed.value && !inlineCollapsed.value) {
        tooltipProps.title = null; // Reset `visible` to fix control mode tooltip display not correct
        // ref: https://github.com/ant-design/ant-design/issues/16742

        tooltipProps.visible = false;
      } // ============================ Render ============================


      var optionRoleProps = {};

      if (props.role === 'option') {
        optionRoleProps['aria-selected'] = selected.value;
      }

      var icon = getPropsSlot(slots, props, 'icon');
      return _createVNode(Tooltip, _objectSpread(_objectSpread({}, tooltipProps), {}, {
        "placement": rtl.value ? 'left' : 'right',
        "overlayClassName": "".concat(prefixCls.value, "-inline-collapsed-tooltip")
      }), {
        default: function _default() {
          return [_createVNode(Overflow.Item, _objectSpread(_objectSpread(_objectSpread({
            "component": "li"
          }, attrs), {}, {
            "style": _extends(_extends({}, attrs.style || {}), directionStyle.value),
            "class": [classNames.value, (_ref3 = {}, _defineProperty(_ref3, "".concat(attrs.class), !!attrs.class), _defineProperty(_ref3, "".concat(prefixCls.value, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _ref3)],
            "role": props.role || 'menuitem',
            "tabindex": props.disabled ? null : -1,
            "data-menu-id": key,
            "aria-disabled": props.disabled
          }, optionRoleProps), {}, {
            "onMouseenter": onMouseEnter,
            "onMouseleave": onMouseLeave,
            "onClick": onInternalClick,
            "onKeydown": onInternalKeyDown,
            "onFocus": onInternalFocus,
            "title": typeof title === 'string' ? title : undefined
          }), {
            default: function _default() {
              return [cloneElement(icon, {
                class: "".concat(prefixCls.value, "-item-icon")
              }), renderItemChildren(icon, children)];
            }
          })];
        }
      });
    };
  }
});