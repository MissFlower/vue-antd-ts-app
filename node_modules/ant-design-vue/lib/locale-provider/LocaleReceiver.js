"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocaleReceiver = useLocaleReceiver;
exports.default = void 0;

var _vue = require("vue");

var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));

var _default2 = _interopRequireDefault(require("./default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _vue.defineComponent)({
  name: 'LocaleReceiver',
  props: {
    componentName: _vueTypes.default.string,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var localeData = (0, _vue.inject)('localeData', {});
    var locale = (0, _vue.computed)(function () {
      var _props$componentName = props.componentName,
          componentName = _props$componentName === void 0 ? 'global' : _props$componentName,
          defaultLocale = props.defaultLocale;
      var locale = defaultLocale || _default2.default[componentName || 'global'];
      var antLocale = localeData.antLocale;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends(_extends({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    });
    var localeCode = (0, _vue.computed)(function () {
      var antLocale = localeData.antLocale;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default2.default.locale;
      }

      return localeCode;
    });
    return function () {
      var children = props.children || slots.default;
      var antLocale = localeData.antLocale;
      return children === null || children === void 0 ? void 0 : children(locale.value, localeCode.value, antLocale);
    };
  }
});

exports.default = _default;

function useLocaleReceiver(componentName, defaultLocale) {
  var localeData = (0, _vue.inject)('localeData', {});
  var componentLocale = (0, _vue.computed)(function () {
    var antLocale = localeData.antLocale;
    var locale = defaultLocale || _default2.default[componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return _extends(_extends({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  });
  return [componentLocale];
}