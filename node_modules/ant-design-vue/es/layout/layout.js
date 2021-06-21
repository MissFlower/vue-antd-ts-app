import { createVNode as _createVNode } from "vue";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { createVNode, defineComponent, provide, ref } from 'vue';
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import useConfigInject from '../_util/hooks/useConfigInject';
import { SiderHookProviderKey } from './injectionKey';
export var basicProps = {
  prefixCls: PropTypes.string,
  hasSider: PropTypes.looseBool,
  tagName: PropTypes.string
};

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName,
      name = _ref.name;
  return function (BasicComponent) {
    var Adapter = defineComponent({
      name: name,
      props: basicProps,
      setup: function setup(props, _ref2) {
        var slots = _ref2.slots;

        var _useConfigInject = useConfigInject(suffixCls, props),
            prefixCls = _useConfigInject.prefixCls;

        return function () {
          var _a;

          var basicComponentProps = _extends(_extends({}, props), {
            prefixCls: prefixCls.value,
            tagName: tagName
          });

          return _createVNode(BasicComponent, basicComponentProps, {
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

var Basic = defineComponent({
  props: basicProps,
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    return function () {
      var _a;

      return createVNode(props.tagName, {
        class: props.prefixCls
      }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
    };
  }
});
var BasicLayout = defineComponent({
  props: basicProps,
  setup: function setup(props, _ref4) {
    var slots = _ref4.slots;

    var _useConfigInject2 = useConfigInject('', props),
        direction = _useConfigInject2.direction;

    var siders = ref([]);
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
    provide(SiderHookProviderKey, siderHookProvider);
    return function () {
      var _classNames;

      var _a;

      var prefixCls = props.prefixCls,
          hasSider = props.hasSider,
          tagName = props.tagName;
      var divCls = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : siders.value.length > 0), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction.value === 'rtl'), _classNames));
      return createVNode(tagName, {
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
export default Layout;