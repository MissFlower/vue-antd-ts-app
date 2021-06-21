"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.basicProps = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _classNames2 = _interopRequireDefault(require("../_util/classNames"));

var _useConfigInject3 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));

var _injectionKey = require("./injectionKey");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var basicProps = {
  prefixCls: _vueTypes.default.string,
  hasSider: _vueTypes.default.looseBool,
  tagName: _vueTypes.default.string
};
exports.basicProps = basicProps;

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName,
      name = _ref.name;
  return function (BasicComponent) {
    var Adapter = (0, _vue.defineComponent)({
      name: name,
      props: basicProps,
      setup: function setup(props, _ref2) {
        var slots = _ref2.slots;

        var _useConfigInject = (0, _useConfigInject3.default)(suffixCls, props),
            prefixCls = _useConfigInject.prefixCls;

        return function () {
          var _a;

          var basicComponentProps = _extends(_extends({}, props), {
            prefixCls: prefixCls.value,
            tagName: tagName
          });

          return (0, _vue.createVNode)(BasicComponent, basicComponentProps, {
            default: function _default() {
              return [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)];
            }
          });
        };
      }
    });
    return Adapter;
  };
}

var Basic = (0, _vue.defineComponent)({
  props: basicProps,
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    return function () {
      var _a;

      return (0, _vue.createVNode)(props.tagName, {
        class: props.prefixCls
      }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
    };
  }
});
var BasicLayout = (0, _vue.defineComponent)({
  props: basicProps,
  setup: function setup(props, _ref4) {
    var slots = _ref4.slots;

    var _useConfigInject2 = (0, _useConfigInject3.default)('', props),
        direction = _useConfigInject2.direction;

    var siders = (0, _vue.ref)([]);
    var siderHookProvider = {
      addSider: function addSider(id) {
        siders.value = [].concat(_toConsumableArray(siders.value), [id]);
      },
      removeSider: function removeSider(id) {
        siders.value = siders.value.filter(function (currentId) {
          return currentId !== id;
        });
      }
    };
    (0, _vue.provide)(_injectionKey.SiderHookProviderKey, siderHookProvider);
    return function () {
      var _classNames;

      var _a;

      var prefixCls = props.prefixCls,
          hasSider = props.hasSider,
          tagName = props.tagName;
      var divCls = (0, _classNames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : siders.value.length > 0), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction.value === 'rtl'), _classNames));
      return (0, _vue.createVNode)(tagName, {
        class: divCls
      }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
    };
  }
});
var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  name: 'ALayout'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  name: 'ALayoutHeader'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  name: 'ALayoutFooter'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  name: 'ALayoutContent'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
var _default2 = Layout;
exports.default = _default2;