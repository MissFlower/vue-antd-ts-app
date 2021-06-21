import { createVNode as _createVNode } from "vue";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import classNames from '../../_util/classNames';
import { useInjectMenu } from './hooks/useMenuContext';

var InternalSubMenuList = function InternalSubMenuList(_props, _ref) {
  var slots = _ref.slots,
      attrs = _ref.attrs;

  var _a;

  var _useInjectMenu = useInjectMenu(),
      prefixCls = _useInjectMenu.prefixCls,
      mode = _useInjectMenu.mode;

  return _createVNode("ul", _objectSpread(_objectSpread({}, attrs), {}, {
    "class": classNames(prefixCls.value, "".concat(prefixCls.value, "-sub"), "".concat(prefixCls.value, "-").concat(mode.value === 'inline' ? 'inline' : 'vertical')),
    "data-menu-list": true
  }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};

InternalSubMenuList.displayName = 'SubMenuList';
export default InternalSubMenuList;