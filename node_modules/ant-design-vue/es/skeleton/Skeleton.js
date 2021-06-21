import { createVNode as _createVNode } from "vue";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import { defineComponent } from 'vue';
import classNames from '../_util/classNames';
import PropTypes, { withUndefined } from '../_util/vue-types';
import { initDefaultProps } from '../_util/props-util';
import { avatarProps } from './Avatar';
import Title, { skeletonTitleProps } from './Title';
import Paragraph, { skeletonParagraphProps } from './Paragraph';
import Omit from 'omit.js';
import useConfigInject from '../_util/hooks/useConfigInject';
import Element from './Element';
export var skeletonProps = {
  active: PropTypes.looseBool,
  loading: PropTypes.looseBool,
  prefixCls: PropTypes.string,
  avatar: withUndefined(PropTypes.oneOfType([PropTypes.string, PropTypes.shape(Omit(avatarProps, ['active'])).loose, PropTypes.looseBool])),
  title: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.string, PropTypes.shape(skeletonTitleProps).loose])),
  paragraph: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.string, PropTypes.shape(skeletonParagraphProps).loose]))
};

function getComponentProps(prop) {
  if (prop && _typeof(prop) === 'object') {
    return prop;
  }

  return {};
}

function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }

  return {
    size: 'large',
    shape: 'circle'
  };
}

function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }

  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }

  return {};
}

function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {}; // Width

  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  } // Rows


  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }

  return basicProps;
}

var Skeleton = defineComponent({
  name: 'ASkeleton',
  props: initDefaultProps(skeletonProps, {
    avatar: false,
    title: true,
    paragraph: true
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useConfigInject = useConfigInject('skeleton', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction;

    return function () {
      var _a;

      var loading = props.loading,
          avatar = props.avatar,
          title = props.title,
          paragraph = props.paragraph,
          active = props.active,
          round = props.round;
      var pre = prefixCls.value;

      if (loading || props.loading === undefined) {
        var _classNames;

        var hasAvatar = !!avatar || avatar === '';
        var hasTitle = !!title || title === '';
        var hasParagraph = !!paragraph || paragraph === ''; // Avatar

        var avatarNode;

        if (hasAvatar) {
          var _avatarProps = _extends(_extends({
            prefixCls: "".concat(pre, "-avatar")
          }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));

          avatarNode = _createVNode("div", {
            "class": "".concat(pre, "-header")
          }, [_createVNode(Element, _avatarProps, null)]);
        }

        var contentNode;

        if (hasTitle || hasParagraph) {
          // Title
          var $title;

          if (hasTitle) {
            var titleProps = _extends(_extends({
              prefixCls: "".concat(pre, "-title")
            }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));

            $title = _createVNode(Title, titleProps, null);
          } // Paragraph


          var paragraphNode;

          if (hasParagraph) {
            var paragraphProps = _extends(_extends({
              prefixCls: "".concat(pre, "-paragraph")
            }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));

            paragraphNode = _createVNode(Paragraph, paragraphProps, null);
          }

          contentNode = _createVNode("div", {
            "class": "".concat(pre, "-content")
          }, [$title, paragraphNode]);
        }

        var cls = classNames(pre, (_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-with-avatar"), hasAvatar), _defineProperty(_classNames, "".concat(pre, "-active"), active), _defineProperty(_classNames, "".concat(pre, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames, "".concat(pre, "-round"), round), _classNames));
        return _createVNode("div", {
          "class": cls
        }, [avatarNode, contentNode]);
      }

      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
export default Skeleton;