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
    borderRadius = _theme.default.borderRadius,
    fontSizes = _theme.default.fontSizes,
    fonts = _theme.default.fonts;
var VARIANTS = {
  active: 'active',
  inactive: 'inactive'
};

var StyledPill = _styledComponents.default.button.attrs({
  type: 'button'
}).withConfig({
  displayName: "pill__StyledPill",
  componentId: "h8lyso-0"
})(["background-color:", ";color:", ";padding:1em;min-width:80px;border-radius:", ";box-shadow:", ";border:none;font-size:", ";font-weight:", ";font-family:", ";"], colors.transparent, function (props) {
  return props.variant === VARIANTS.active ? '#faa221' : colors.grayExtraDark;
}, borderRadius.large, function (props) {
  return props.variant === VARIANTS.active ? '0 2px 5px 3px rgba(213, 213, 213, 0.39)' : 'none';
}, fontSizes.small, fontWeights.bold, fonts.Montserrat);

var Pill =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Pill, _React$PureComponent);

  function Pill() {
    (0, _classCallCheck2.default)(this, Pill);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Pill).apply(this, arguments));
  }

  (0, _createClass2.default)(Pill, [{
    key: "render",
    value: function render() {
      return React.createElement(StyledPill, this.props);
    }
  }]);
  return Pill;
}(React.PureComponent);

(0, _defineProperty2.default)(Pill, "VARIANTS", VARIANTS);
(0, _defineProperty2.default)(Pill, "propTypes", {
  variant: _propTypes.default.oneOf(Object.keys(VARIANTS))
});
var _default = Pill;
exports.default = _default;