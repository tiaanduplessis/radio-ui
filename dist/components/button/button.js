"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("../../config/theme"));

var colors = _theme.default.colors,
    fontWeights = _theme.default.fontWeights,
    fontSizes = _theme.default.fontSizes,
    fonts = _theme.default.fonts,
    borderRadius = _theme.default.borderRadius;
var SHAPES = {
  square: 'square',
  round: 'round',
  rounded: 'rounded',
  block: 'block'
};
var VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  minimal: 'minimal',
  disabled: 'disabled',
  delete: 'delete'
};
var SIZES = {
  compact: 'compact',
  default: 'default',
  large: 'large'
};

var StyledButton = _styledComponents.default.button.attrs({
  type: 'button'
}).withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-130bw1g-0"
})(["font-size:", ";font-weight:", ";font-family:", ";min-width:120px;width:", ";color:", ";background-color:", ";padding:", ";border:none;border-radius:", ";box-shadow:", ";cursor:pointer;pointer-events:", ";margin:", ";transition:transform 0.1s;&:active{transform:scale(0.95);}"], function (props) {
  if (props.size === SIZES.large) {
    return fontSizes.medium;
  }

  return fontSizes.small;
}, fontWeights.bold, fonts.Montserrat, function (props) {
  return props.shape === SHAPES.block ? '100%' : 'auto';
}, function (props) {
  if (props.variant === VARIANTS.secondary) {
    return colors.dark;
  }

  if (props.variant === VARIANTS.minimal) {
    return colors.primary;
  }

  if (props.variant === VARIANTS.delete || props.variant === VARIANTS.disabled) {
    return colors.white;
  }

  return props.variant === VARIANTS.primary ? colors.white : colors.black;
}, function (props) {
  if (props.variant === VARIANTS.disabled) {
    return colors.gray;
  }

  if (props.variant === VARIANTS.delete) {
    return colors.red;
  }

  return props.variant === VARIANTS.primary ? colors.primary : colors.white;
}, function (props) {
  if (props.size === SIZES.compact) {
    return '5px 10px';
  }

  if (props.size === SIZES.default) {
    return '10px 20px';
  }

  return '15px 40px';
}, function (props) {
  if (props.shape === SHAPES.rounded) {
    return borderRadius.large;
  }

  return borderRadius.small;
}, function (props) {
  return props.variant !== VARIANTS.minimal ? '0 2px 4px 0 rgba(0,0,0,.1)' : 'none';
}, function (props) {
  return props.variant === VARIANTS.disabled ? 'none' : 'inherit';
}, function (props) {
  return props.margin || '0px';
});

var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Button, _React$PureComponent);

  function Button() {
    (0, _classCallCheck2.default)(this, Button);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
  }

  (0, _createClass2.default)(Button, [{
    key: "render",
    value: function render() {
      return React.createElement(StyledButton, this.props, this.props.children);
    }
  }]);
  return Button;
}(React.PureComponent);

(0, _defineProperty2.default)(Button, "SHAPES", SHAPES);
(0, _defineProperty2.default)(Button, "VARIANTS", VARIANTS);
(0, _defineProperty2.default)(Button, "SIZES", SIZES);
(0, _defineProperty2.default)(Button, "propTypes", {
  onClick: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]).isRequired,
  variant: _propTypes.default.oneOf(Object.keys(VARIANTS)),
  shape: _propTypes.default.oneOf(Object.keys(SHAPES)),
  size: _propTypes.default.oneOf(Object.keys(SIZES)),
  margin: _propTypes.default.string
});
(0, _defineProperty2.default)(Button, "defaultProps", {
  variant: Button.VARIANTS.primary,
  shape: Button.SHAPES.square,
  size: Button.SIZES.default
});
var _default = Button;
exports.default = _default;