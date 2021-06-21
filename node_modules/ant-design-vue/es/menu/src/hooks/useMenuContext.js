function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent, inject, provide } from 'vue';
var MenuContextKey = Symbol('menuContextKey');

var useProvideMenu = function useProvideMenu(props) {
  provide(MenuContextKey, props);
};

var useInjectMenu = function useInjectMenu() {
  return inject(MenuContextKey);
};

var MenuFirstLevelContextKey = Symbol('menuFirstLevelContextKey');

var useProvideFirstLevel = function useProvideFirstLevel(firstLevel) {
  provide(MenuFirstLevelContextKey, firstLevel);
};

var useInjectFirstLevel = function useInjectFirstLevel() {
  return inject(MenuFirstLevelContextKey, true);
};

var MenuContextProvider = defineComponent({
  name: 'MenuContextProvider',
  inheritAttrs: false,
  props: {
    props: Object
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    useProvideMenu(_extends(_extends({}, useInjectMenu()), props.props));
    return function () {
      var _a;

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
export { useProvideMenu, MenuContextKey, useInjectMenu, MenuFirstLevelContextKey, useProvideFirstLevel, useInjectFirstLevel, MenuContextProvider };
export default useProvideMenu;