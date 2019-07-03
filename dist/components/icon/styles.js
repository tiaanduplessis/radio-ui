"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.VARIANTS = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../config/theme"));

var colors = _theme.default.colors,
    borderRadius = _theme.default.borderRadius;
var VARIANTS = {
  primary: 'primary',
  minimal: 'minimal',
  disabled: 'disabled'
};
exports.VARIANTS = VARIANTS;

var Button = _styledComponents.default.button.attrs({
  type: 'button'
}).withConfig({
  displayName: "styles__Button",
  componentId: "mblncw-0"
})(["display:flex;align-items:center;justify-content:center;border-radius:", ";border:none;background-color:", ";pointer-events:", ";box-shadow:0 4px 15px 0 rgba(0,0,0,0.12),0 2px 15px 0 rgba(0,0,0,0.08);width:38px;height:38px;cursor:pointer;min-width:38px;"], borderRadius.full, function (props) {
  if (props.variant === VARIANTS.disabled) {
    return colors.gray;
  }

  if (props.variant === VARIANTS.minimal) {
    return colors.transparent;
  }

  return colors.primary;
}, function (props) {
  return props.variant === VARIANTS.disabled ? 'none' : 'inherit';
});

exports.Button = Button;