function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { computed, inject, provide } from 'vue';
var KeyPathContext = Symbol('KeyPathContext');

var useInjectKeyPath = function useInjectKeyPath() {
  return inject(KeyPathContext, {
    parentEventKeys: computed(function () {
      return [];
    }),
    parentKeys: computed(function () {
      return [];
    }),
    parentInfo: {}
  });
};

var useProvideKeyPath = function useProvideKeyPath(eventKey, key, menuInfo) {
  var _useInjectKeyPath = useInjectKeyPath(),
      parentEventKeys = _useInjectKeyPath.parentEventKeys,
      parentKeys = _useInjectKeyPath.parentKeys;

  var eventKeys = computed(function () {
    return [].concat(_toConsumableArray(parentEventKeys.value), [eventKey]);
  });
  var keys = computed(function () {
    return [].concat(_toConsumableArray(parentKeys.value), [key]);
  });
  provide(KeyPathContext, {
    parentEventKeys: eventKeys,
    parentKeys: keys,
    parentInfo: menuInfo
  });
  return keys;
};

export { useProvideKeyPath, useInjectKeyPath, KeyPathContext };
export default useProvideKeyPath;