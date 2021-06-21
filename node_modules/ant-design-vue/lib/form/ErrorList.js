"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _context = require("./context");

var _runtimeCore = require("@vue/runtime-core");

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _transition = _interopRequireWildcard(require("../_util/transition"));

var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _default2 = (0, _runtimeCore.defineComponent)({
  name: 'ErrorList',
  props: ['errors', 'help', 'onDomErrorVisibleChange'],
  setup: function setup(props) {
    var _useConfigInject = (0, _useConfigInject2.default)('', props),
        rootPrefixCls = _useConfigInject.prefixCls;

    var _useInjectFormItemPre = (0, _context.useInjectFormItemPrefix)(),
        prefixCls = _useInjectFormItemPre.prefixCls,
        status = _useInjectFormItemPre.status;

    var visible = (0, _runtimeCore.ref)(!!(props.errors && props.errors.length));
    var innerStatus = (0, _runtimeCore.ref)(status.value);
    var timeout = (0, _runtimeCore.ref)();
    var cacheErrors = (0, _runtimeCore.ref)(_toConsumableArray(props.errors));
    (0, _runtimeCore.watch)([function () {
      return _toConsumableArray(props.errors);
    }, function () {
      return props.help;
    }], function (newValues) {
      window.clearTimeout(timeout.value);

      if (props.help) {
        visible.value = !!(props.errors && props.errors.length);

        if (visible.value) {
          cacheErrors.value = newValues[0];
        }
      } else {
        timeout.value = window.setTimeout(function () {
          visible.value = !!(props.errors && props.errors.length);

          if (visible.value) {
            cacheErrors.value = newValues[0];
          }
        });
      }
    });
    (0, _runtimeCore.onBeforeUnmount)(function () {
      window.clearTimeout(timeout.value);
    }); // Memo status in same visible

    (0, _runtimeCore.watch)([visible, status], function () {
      if (visible.value && status.value) {
        innerStatus.value = status.value;
      }
    });
    (0, _runtimeCore.watch)(visible, function () {
      var _a;

      if (visible.value) {
        (_a = props.onDomErrorVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props, true);
      }
    }, {
      immediate: true,
      flush: 'post'
    });
    return function () {
      var _a;

      var baseClassName = "".concat(prefixCls.value, "-item-explain");
      var transitionProps = (0, _transition.getTransitionProps)("".concat(rootPrefixCls.value, "-show-help"), {
        onAfterLeave: function onAfterLeave() {
          var _a;

          (_a = props.onDomErrorVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props, false);
        }
      });
      return (0, _vue.createVNode)(_transition.default, transitionProps, {
        default: function _default() {
          return [visible.value ? (0, _vue.createVNode)("div", {
            "class": (0, _classNames2.default)(baseClassName, _defineProperty({}, "".concat(baseClassName, "-").concat(innerStatus.value), innerStatus.value)),
            "key": "help"
          }, [(_a = cacheErrors.value) === null || _a === void 0 ? void 0 : _a.map(function (error, index) {
            return (0, _vue.createVNode)("div", {
              "key": index,
              "role": "alert"
            }, [error]);
          })]) : null];
        }
      });
    };
  }
});

exports.default = _default2;