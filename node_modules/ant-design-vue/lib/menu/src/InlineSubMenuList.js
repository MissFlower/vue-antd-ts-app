"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _runtimeCore = require("@vue/runtime-core");

var _transition = _interopRequireDefault(require("../../_util/transition"));

var _useMenuContext = require("./hooks/useMenuContext");

var _SubMenuList = _interopRequireDefault(require("./SubMenuList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default2 = (0, _runtimeCore.defineComponent)({
  name: 'InlineSubMenuList',
  inheritAttrs: false,
  props: {
    id: String,
    open: Boolean,
    keyPath: Array
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var fixedMode = (0, _runtimeCore.computed)(function () {
      return 'inline';
    });

    var _useInjectMenu = (0, _useMenuContext.useInjectMenu)(),
        motion = _useInjectMenu.motion,
        mode = _useInjectMenu.mode,
        defaultMotions = _useInjectMenu.defaultMotions;

    var sameModeRef = (0, _runtimeCore.computed)(function () {
      return mode.value === fixedMode.value;
    });
    var destroy = (0, _runtimeCore.ref)(!sameModeRef.value);
    var mergedOpen = (0, _runtimeCore.computed)(function () {
      return sameModeRef.value ? props.open : false;
    }); // ================================= Effect =================================
    // Reset destroy state when mode change back

    (0, _runtimeCore.watch)(mode, function () {
      if (sameModeRef.value) {
        destroy.value = false;
      }
    }, {
      flush: 'post'
    });
    var style = (0, _runtimeCore.ref)({});
    var className = (0, _runtimeCore.ref)('');
    var mergedMotion = (0, _runtimeCore.computed)(function () {
      var _a, _b;

      var m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[fixedMode.value]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      var res = typeof m === 'function' ? m(style, className) : m;
      return _extends(_extends({}, res), {
        appear: props.keyPath.length <= 1
      });
    });
    return function () {
      var _a;

      if (destroy.value) {
        return null;
      }

      return (0, _vue.createVNode)(_useMenuContext.MenuContextProvider, {
        "props": {
          mode: fixedMode,
          locked: !sameModeRef.value
        }
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_transition.default, mergedMotion.value, {
            default: function _default() {
              return [(0, _vue.withDirectives)((0, _vue.createVNode)(_SubMenuList.default, {
                "id": props.id,
                "style": style.value,
                "class": className.value
              }, {
                default: function _default() {
                  return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
                }
              }), [[_vue.vShow, mergedOpen.value]])];
            }
          })];
        }
      });
    };
  }
});

exports.default = _default2;