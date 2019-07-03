"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledContent = exports.StyledCardDescription = exports.StyledCardTitle = exports.StyledCardHeader = exports.StyledCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../config/theme"));

var colors = _theme.default.colors,
    fontWeights = _theme.default.fontWeights,
    borderRadius = _theme.default.borderRadius,
    fontSizes = _theme.default.fontSizes,
    fonts = _theme.default.fonts,
    letterSpacing = _theme.default.letterSpacing;

var StyledCard = _styledComponents.default.section.withConfig({
  displayName: "styles__StyledCard",
  componentId: "cdbc1b-0"
})(["background-color:", ";border-radius:", ";margin:", ";padding:", ";box-shadow:0 0 8px 0 rgba(44,44,44,0.1);flex:1;"], colors.white, borderRadius.default, function (props) {
  return props.margin || '1em 0';
}, function (props) {
  return props.padding || '1.5em';
});

exports.StyledCard = StyledCard;

var StyledCardHeader = _styledComponents.default.header.withConfig({
  displayName: "styles__StyledCardHeader",
  componentId: "cdbc1b-1"
})(["position:relative;"]);

exports.StyledCardHeader = StyledCardHeader;

var StyledCardTitle = _styledComponents.default.h2.withConfig({
  displayName: "styles__StyledCardTitle",
  componentId: "cdbc1b-2"
})(["font-size:", ";font-family:", ";border-left:5px solid ", ";padding:0 0.5em;text-transform:uppercase;letter-spacing:", ";color:", ";margin:1em;"], fontSizes.small, fonts.Montserrat, colors.primary, letterSpacing.tight, colors.grayExtraDark);

exports.StyledCardTitle = StyledCardTitle;

var StyledCardDescription = _styledComponents.default.p.withConfig({
  displayName: "styles__StyledCardDescription",
  componentId: "cdbc1b-3"
})(["margin:1em 1em 2em;padding-bottom:2em;border-bottom:3px solid #f4f4f4;color:#77797a;font-weight:", ";font-size:", ";padding-right:5em;"], fontWeights.light, fontSizes.small);

exports.StyledCardDescription = StyledCardDescription;

var StyledContent = _styledComponents.default.div.withConfig({
  displayName: "styles__StyledContent",
  componentId: "cdbc1b-4"
})(["margin:1em;"]);

exports.StyledContent = StyledContent;