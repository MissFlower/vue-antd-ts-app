"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.menuProps = void 0;

var _vue = require("vue");

var _shallowequal = _interopRequireDefault(require("../../_util/shallowequal"));

var _useMenuContext = _interopRequireWildcard(require("./hooks/useMenuContext"));

var _useConfigInject2 = _interopRequireDefault(require("../../_util/hooks/useConfigInject"));

var _devWarning = _interopRequireDefault(require("../../vc-util/devWarning"));

var _transition = require("../../_util/transition");

var _uniq = _interopRequireDefault(require("lodash/uniq"));

var _injectionKey = require("../../layout/injectionKey");

var _propsUtil = require("../../_util/props-util");

var _vcOverflow = _interopRequireDefault(require("../../vc-overflow"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _SubMenu = _interopRequireDefault(require("./SubMenu"));

var _EllipsisOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/EllipsisOutlined"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var menuProps = {
  prefixCls: String,
  disabled: Boolean,
  inlineCollapsed: Boolean,
  disabledOverflow: Boolean,
  openKeys: Array,
  selectedKeys: Array,
  activeKey: String,
  selectable: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  motion: Object,
  theme: {
    type: String,
    default: 'light'
  },
  mode: {
    type: String,
    default: 'vertical'
  },
  inlineIndent: {
    type: Number,
    default: 24
  },
  subMenuOpenDelay: {
    type: Number,
    default: 0.1
  },
  subMenuCloseDelay: {
    type: Number,
    default: 0.1
  },
  builtinPlacements: {
    type: Object
  },
  triggerSubMenuAction: {
    type: String,
    default: 'hover'
  },
  getPopupContainer: Function
};
exports.menuProps = menuProps;
var EMPTY_LIST = [];

var _default2 = (0, _vue.defineComponent)({
  name: 'AMenu',
  props: menuProps,
  emits: ['update:openKeys', 'openChange', 'select', 'deselect', 'update:selectedKeys', 'click', 'update:activeKey'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;

    var _useConfigInject = (0, _useConfigInject2.default)('menu', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    var store = (0, _vue.ref)({});
    var siderCollapsed = (0, _vue.inject)(_injectionKey.SiderCollapsedKey, (0, _vue.ref)(undefined));
    var inlineCollapsed = (0, _vue.computed)(function () {
      if (siderCollapsed.value !== undefined) {
        return siderCollapsed.value;
      }

      return props.inlineCollapsed;
    });
    var isMounted = (0, _vue.ref)(false);
    (0, _vue.onMounted)(function () {
      isMounted.value = true;
    });
    (0, _vue.watchEffect)(function () {
      (0, _devWarning.default)(!(props.inlineCollapsed === true && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
      (0, _devWarning.default)(!(siderCollapsed.value !== undefined && props.inlineCollapsed === true), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    });
    var activeKeys = (0, _vue.ref)([]);
    var mergedSelectedKeys = (0, _vue.ref)([]);
    var keyMapStore = (0, _vue.ref)({});
    (0, _vue.watch)(store, function () {
      var newKeyMapStore = {};

      for (var _i = 0, _Object$values = Object.values(store.value); _i < _Object$values.length; _i++) {
        var menuInfo = _Object$values[_i];
        newKeyMapStore[menuInfo.key] = menuInfo;
      }

      keyMapStore.value = newKeyMapStore;
    }, {
      immediate: true
    });
    (0, _vue.watchEffect)(function () {
      if (props.activeKey !== undefined) {
        var keys = [];
        var menuInfo = props.activeKey ? keyMapStore.value[props.activeKey] : undefined;

        if (menuInfo && props.activeKey !== undefined) {
          keys = [].concat(_toConsumableArray(menuInfo.parentKeys), [props.activeKey]);
        } else {
          keys = [];
        }

        if (!(0, _shallowequal.default)(activeKeys.value, keys)) {
          activeKeys.value = keys;
        }
      }
    });
    (0, _vue.watch)(function () {
      return props.selectedKeys;
    }, function (selectedKeys) {
      mergedSelectedKeys.value = selectedKeys || mergedSelectedKeys.value;
    }, {
      immediate: true
    });
    var selectedSubMenuEventKeys = (0, _vue.ref)([]);
    (0, _vue.watch)([keyMapStore, mergedSelectedKeys], function () {
      var subMenuParentEventKeys = [];
      mergedSelectedKeys.value.forEach(function (key) {
        var menuInfo = keyMapStore.value[key];

        if (menuInfo) {
          var _subMenuParentEventKe;

          (_subMenuParentEventKe = subMenuParentEventKeys).push.apply(_subMenuParentEventKe, _toConsumableArray((0, _vue.unref)(menuInfo.parentEventKeys)));
        }
      });
      subMenuParentEventKeys = (0, _uniq.default)(subMenuParentEventKeys);

      if (!(0, _shallowequal.default)(selectedSubMenuEventKeys.value, subMenuParentEventKeys)) {
        selectedSubMenuEventKeys.value = subMenuParentEventKeys;
      }
    }, {
      immediate: true
    }); // >>>>> Trigger select

    var triggerSelection = function triggerSelection(info) {
      if (!props.selectable) {
        return;
      } // Insert or Remove


      var targetKey = info.key;
      var exist = mergedSelectedKeys.value.includes(targetKey);
      var newSelectedKeys;

      if (props.multiple) {
        if (exist) {
          newSelectedKeys = mergedSelectedKeys.value.filter(function (key) {
            return key !== targetKey;
          });
        } else {
          newSelectedKeys = [].concat(_toConsumableArray(mergedSelectedKeys.value), [targetKey]);
        }
      } else {
        newSelectedKeys = [targetKey];
      } // Trigger event


      var selectInfo = _extends(_extends({}, info), {
        selectedKeys: newSelectedKeys
      });

      if (!(0, _shallowequal.default)(newSelectedKeys, mergedSelectedKeys.value)) {
        if (props.selectedKeys === undefined) {
          mergedSelectedKeys.value = newSelectedKeys;
        }

        emit('update:selectedKeys', newSelectedKeys);

        if (exist && props.multiple) {
          emit('deselect', selectInfo);
        } else {
          emit('select', selectInfo);
        }
      }

      if (mergedMode.value !== 'inline' && !props.multiple && mergedOpenKeys.value.length) {
        triggerOpenKeys(EMPTY_LIST);
      }
    };

    var mergedOpenKeys = (0, _vue.ref)([]);
    (0, _vue.watch)(function () {
      return props.openKeys;
    }, function () {
      var openKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mergedOpenKeys.value;

      if (!(0, _shallowequal.default)(mergedOpenKeys.value, openKeys)) {
        mergedOpenKeys.value = openKeys;
      }
    }, {
      immediate: true
    });

    var changeActiveKeys = function changeActiveKeys(keys) {
      if (props.activeKey === undefined) {
        activeKeys.value = keys;
      }

      emit('update:activeKey', keys[keys.length - 1]);
    };

    var disabled = (0, _vue.computed)(function () {
      return !!props.disabled;
    });
    var isRtl = (0, _vue.computed)(function () {
      return direction.value === 'rtl';
    });
    var mergedMode = (0, _vue.ref)('vertical');
    var mergedInlineCollapsed = (0, _vue.ref)(false);
    (0, _vue.watchEffect)(function () {
      if ((props.mode === 'inline' || props.mode === 'vertical') && inlineCollapsed.value) {
        mergedMode.value = 'vertical';
        mergedInlineCollapsed.value = inlineCollapsed.value;
      } else {
        mergedMode.value = props.mode;
        mergedInlineCollapsed.value = false;
      }
    });
    var isInlineMode = (0, _vue.computed)(function () {
      return mergedMode.value === 'inline';
    });

    var triggerOpenKeys = function triggerOpenKeys(keys) {
      mergedOpenKeys.value = keys;
      emit('update:openKeys', keys);
      emit('openChange', keys);
    }; // >>>>> Cache & Reset open keys when inlineCollapsed changed


    var inlineCacheOpenKeys = (0, _vue.ref)(mergedOpenKeys.value);
    var mountRef = (0, _vue.ref)(false); // Cache

    (0, _vue.watch)(mergedOpenKeys, function () {
      if (isInlineMode.value) {
        inlineCacheOpenKeys.value = mergedOpenKeys.value;
      }
    }, {
      immediate: true
    }); // Restore

    (0, _vue.watch)(isInlineMode, function () {
      if (!mountRef.value) {
        mountRef.value = true;
        return;
      }

      if (isInlineMode.value) {
        mergedOpenKeys.value = inlineCacheOpenKeys.value;
      } else {
        // Trigger open event in case its in control
        triggerOpenKeys(EMPTY_LIST);
      }
    }, {
      immediate: true
    });
    var className = (0, _vue.computed)(function () {
      var _ref2;

      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-root"), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(mergedMode.value), true), _defineProperty(_ref2, "".concat(prefixCls.value, "-inline-collapsed"), mergedInlineCollapsed.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-rtl"), isRtl.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-").concat(props.theme), true), _ref2;
    });
    var defaultMotions = {
      horizontal: {
        name: "ant-slide-up"
      },
      inline: _transition.collapseMotion,
      other: {
        name: "ant-zoom-big"
      }
    };
    (0, _useMenuContext.useProvideFirstLevel)(true);

    var getChildrenKeys = function getChildrenKeys() {
      var eventKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var keys = [];
      var storeValue = store.value;
      eventKeys.forEach(function (eventKey) {
        var _storeValue$eventKey = storeValue[eventKey],
            key = _storeValue$eventKey.key,
            childrenEventKeys = _storeValue$eventKey.childrenEventKeys;
        keys.push.apply(keys, [key].concat(_toConsumableArray(getChildrenKeys(childrenEventKeys))));
      });
      return keys;
    }; // ========================= Open =========================

    /**
     * Click for item. SubMenu do not have selection status
     */


    var onInternalClick = function onInternalClick(info) {
      emit('click', info);
      triggerSelection(info);
    };

    var onInternalOpenChange = function onInternalOpenChange(eventKey, open) {
      var _store$value$eventKey = store.value[eventKey],
          key = _store$value$eventKey.key,
          childrenEventKeys = _store$value$eventKey.childrenEventKeys;
      var newOpenKeys = mergedOpenKeys.value.filter(function (k) {
        return k !== key;
      });

      if (open) {
        newOpenKeys.push(key);
      } else if (mergedMode.value !== 'inline') {
        // We need find all related popup to close
        var subPathKeys = getChildrenKeys(childrenEventKeys);
        newOpenKeys = newOpenKeys.filter(function (k) {
          return !subPathKeys.includes(k);
        });
      }

      if (!(0, _shallowequal.default)(mergedOpenKeys, newOpenKeys)) {
        triggerOpenKeys(newOpenKeys);
      }
    };

    var registerMenuInfo = function registerMenuInfo(key, info) {
      store.value = _extends(_extends({}, store.value), _defineProperty({}, key, info));
    };

    var unRegisterMenuInfo = function unRegisterMenuInfo(key) {
      delete store.value[key];
      store.value = _extends({}, store.value);
    };

    var lastVisibleIndex = (0, _vue.ref)(0);
    (0, _useMenuContext.default)({
      store: store,
      prefixCls: prefixCls,
      activeKeys: activeKeys,
      openKeys: mergedOpenKeys,
      selectedKeys: mergedSelectedKeys,
      changeActiveKeys: changeActiveKeys,
      disabled: disabled,
      rtl: isRtl,
      mode: mergedMode,
      inlineIndent: (0, _vue.computed)(function () {
        return props.inlineIndent;
      }),
      subMenuCloseDelay: (0, _vue.computed)(function () {
        return props.subMenuCloseDelay;
      }),
      subMenuOpenDelay: (0, _vue.computed)(function () {
        return props.subMenuOpenDelay;
      }),
      builtinPlacements: (0, _vue.computed)(function () {
        return props.builtinPlacements;
      }),
      triggerSubMenuAction: (0, _vue.computed)(function () {
        return props.triggerSubMenuAction;
      }),
      getPopupContainer: (0, _vue.computed)(function () {
        return props.getPopupContainer;
      }),
      inlineCollapsed: mergedInlineCollapsed,
      antdMenuTheme: (0, _vue.computed)(function () {
        return props.theme;
      }),
      siderCollapsed: siderCollapsed,
      defaultMotions: (0, _vue.computed)(function () {
        return isMounted.value ? defaultMotions : null;
      }),
      motion: (0, _vue.computed)(function () {
        return isMounted.value ? props.motion : null;
      }),
      overflowDisabled: (0, _vue.computed)(function () {
        return undefined;
      }),
      onOpenChange: onInternalOpenChange,
      onItemClick: onInternalClick,
      registerMenuInfo: registerMenuInfo,
      unRegisterMenuInfo: unRegisterMenuInfo,
      selectedSubMenuEventKeys: selectedSubMenuEventKeys,
      isRootMenu: true
    });
    return function () {
      var _a;

      var childList = (0, _propsUtil.flattenChildren)((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      var allVisible = lastVisibleIndex.value >= childList.length - 1 || mergedMode.value !== 'horizontal' || props.disabledOverflow; // >>>>> Children

      var wrappedChildList = mergedMode.value !== 'horizontal' || props.disabledOverflow ? childList : // Need wrap for overflow dropdown that do not response for open
      childList.map(function (child, index) {
        return (// Always wrap provider to avoid sub node re-mount
          (0, _vue.createVNode)(_useMenuContext.MenuContextProvider, {
            "key": child.key,
            "props": {
              overflowDisabled: (0, _vue.computed)(function () {
                return index > lastVisibleIndex.value;
              })
            }
          }, {
            default: function _default() {
              return [child];
            }
          })
        );
      });
      var overflowedIndicator = (0, _vue.createVNode)(_EllipsisOutlined.default, null, null); // data-hack-store-update 初步判断是 vue bug，先用hack方式

      return (0, _vue.createVNode)(_vcOverflow.default, {
        "data-hack-store-update": store.value,
        "prefixCls": "".concat(prefixCls.value, "-overflow"),
        "component": "ul",
        "itemComponent": _MenuItem.default,
        "class": className.value,
        "role": "menu",
        "data": wrappedChildList,
        "renderRawItem": function renderRawItem(node) {
          return node;
        },
        "renderRawRest": function renderRawRest(omitItems) {
          // We use origin list since wrapped list use context to prevent open
          var len = omitItems.length;
          var originOmitItems = len ? childList.slice(-len) : null;
          return (0, _vue.createVNode)(_SubMenu.default, {
            "eventKey": _vcOverflow.default.OVERFLOW_KEY,
            "title": overflowedIndicator,
            "disabled": allVisible,
            "internalPopupClose": len === 0
          }, {
            default: function _default() {
              return [originOmitItems];
            }
          });
        },
        "maxCount": mergedMode.value !== 'horizontal' || props.disabledOverflow ? _vcOverflow.default.INVALIDATE : _vcOverflow.default.RESPONSIVE,
        "ssr": "full",
        "data-menu-list": true,
        "onVisibleChange": function onVisibleChange(newLastIndex) {
          lastVisibleIndex.value = newLastIndex;
        }
      }, null);
    };
  }
});

exports.default = _default2;