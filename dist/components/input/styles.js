"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledErrorText = exports.StyledInput = exports.StyledInputContainer = exports.StyledLabel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../config/theme"));

var fontSizes = _theme.default.fontSizes,
    fontWeights = _theme.default.fontWeights,
    colors = _theme.default.colors,
    borderRadius = _theme.default.borderRadius;

var StyledLabel = _styledComponents.default.label.withConfig({
  displayName: "styles__StyledLabel",
  componentId: "sc-1gpcnhj-0"
})(["display:block;font-family:inherit;color:", ";font-weight:", ";font-size:", ";margin-bottom:0.4em;"], colors.abbey, fontWeights.bold, fontSizes.xsmall);

exports.StyledLabel = StyledLabel;

var StyledInputContainer = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledInputContainer",
  componentId: "sc-1gpcnhj-1"
})(["min-width:300px;width:", ";margin-bottom:1.5em;position:relative;@media (max-width:990px){width:100%;}"], function (props) {
  return props.width || '45%';
});

exports.StyledInputContainer = StyledInputContainer;

var StyledInput = _styledComponents.default.input.withConfig({
  displayName: "styles__StyledInput",
  componentId: "sc-1gpcnhj-2"
})(["background-color:", ";border:1px solid ", ";font-family:inherit;font-size:", ";padding:0.5em 1em;height:35px;border-radius:", ";width:100%;::placeholder{color:", ";}::-webkit-inner-spin-button,::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}"], function (props) {
  return props.disabled ? colors.transparent : colors.grayExtraLight;
}, function (props) {
  return props.disabled ? colors.gray : colors.grayExtraLight;
}, fontSizes.small, borderRadius.small, colors.grayDark);

exports.StyledInput = StyledInput;

var StyledErrorText = _styledComponents.default.span.attrs({
  role: 'alert'
}).withConfig({
  displayName: "styles__StyledErrorText",
  componentId: "sc-1gpcnhj-3"
})(["position:absolute;top:0;right:0;font-size:", ";font-style:italic;color:", ";font-weight:", ";"], fontSizes.xsmall, colors.red, fontWeights.bold);

exports.StyledErrorText = StyledErrorText;