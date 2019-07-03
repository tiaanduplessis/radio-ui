"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../config/theme"));

var colors = _theme.default.colors,
    borderRadius = _theme.default.borderRadius,
    fonts = _theme.default.fonts,
    fontSizes = _theme.default.fontSizes,
    lineHeight = _theme.default.lineHeight;

var StyledInput = _styledComponents.default.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "checkbox__StyledInput",
  componentId: "sc-120msty-0"
})(["appearance:none;z-index:-1;position:absolute;left:-10px;top:-8px;display:block;margin:0;border-radius:", ";width:40px;height:40px;background-color:rgba(0,0,0,0.6);box-shadow:none;outline:none;opacity:0;transform:scale(1);pointer-events:none;transition:opacity 0.3s,transform 0.2s;&:checked,&:indeterminate{background-color:", ";}&:active{opacity:1;transform:scale(0);transition:transform 0s,opacity 0s;}&:active + ", "::before{border-color:", ";}&:checked:active + ", "::before{border-color:transparent;background-color:rgba(0,0,0,0.6);}&:disabled{opacity:0;}&:disabled + ", "{color:rgba(0,0,0,0.3);cursor:initial;}&:disabled + ", "::before{border-color:rgba(0,0,0,0.3);}"], borderRadius.full, colors.primary, StyledSpan, colors.primary, StyledSpan, StyledSpan, StyledSpan);

var StyledLabel = _styledComponents.default.label.withConfig({
  displayName: "checkbox__StyledLabel",
  componentId: "sc-120msty-1"
})(["z-index:0;position:relative;display:inline-block;color:rgba(0,0,0,0.87);font-family:", ";font-size:", ";line-height:", ";&:hover > ", "{opacity:0.04;}&:hover > ", ":focus{opacity:0.16;}"], fonts.OpenSans, fontSizes.medium, lineHeight.normal, StyledInput, StyledInput);

var StyledSpan = _styledComponents.default.span.withConfig({
  displayName: "checkbox__StyledSpan",
  componentId: "sc-120msty-2"
})(["display:inline-block;width:100%;cursor:pointer;&::before{content:'';display:inline-block;box-sizing:border-box;margin:3px 11px 3px 1px;border:solid 2px;border-color:rgba(0,0,0,0.6);border-radius:", ";width:18px;height:18px;vertical-align:top;transition:border-color 0.2s,background-color 0.2s;}&::after{content:'';display:block;position:absolute;top:3px;left:1px;width:10px;height:5px;border:solid 2px transparent;border-right:none;border-top:none;transform:translate(3px,4px) rotate(-45deg);}", ":checked + &::before,", ":indeterminate + &::before{border-color:", ";background-color:", ";}", ":checked + &::after,", ":indeterminate + &::after{border-color:rgb(var(--pure-material-onprimary-rgb,255,255,255));}", ":indeterminate + &::after{border-left:none;transform:translate(4px,3px);}"], borderRadius.xsmall, StyledInput, StyledInput, colors.primary, colors.primary, StyledInput, StyledInput, StyledInput);

var Checkbox =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Checkbox, _React$PureComponent);

  function Checkbox() {
    (0, _classCallCheck2.default)(this, Checkbox);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Checkbox).apply(this, arguments));
  }

  (0, _createClass2.default)(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
      return React.createElement(StyledLabel, null, React.createElement(StyledInput, props), React.createElement(StyledSpan, null, children));
    }
  }]);
  return Checkbox;
}(React.PureComponent);

var _default = Checkbox;
exports.default = _default;