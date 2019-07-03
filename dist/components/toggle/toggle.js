"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var colors = _theme.default.colors;

var ToggleContainer = _styledComponents.default.div.withConfig({
  displayName: "toggle__ToggleContainer",
  componentId: "v9i3t0-0"
})(["display:block;padding-bottom:3px;width:60px;height:40px;position:relative;"]);

var ToggleInput = _styledComponents.default.input.withConfig({
  displayName: "toggle__ToggleInput",
  componentId: "v9i3t0-1"
})(["display:none;"]);

var ToggleLabel = _styledComponents.default.label.withConfig({
  displayName: "toggle__ToggleLabel",
  componentId: "v9i3t0-2"
})(["cursor:pointer;position:relative;height:40px;background-color:", ";::before{background:", ";border-radius:8px;content:'';height:15px;margin-top:15px;position:absolute;opacity:0.3;transition:all 0.4s ease-in-out;width:40px;}::after{background:", ";border-radius:16px;box-shadow:0px 0px 5px rgba(0,0,0,0.3);content:'';height:24px;left:0px;margin-top:13px;position:absolute;top:-3px;transition:all 0.3s ease-in-out;width:24px;}", ":checked + &::before{background:", ";opacity:0.5;}", ":checked + &::after{background:", ";left:20px;}"], colors.grayExtraDark, colors.gray, colors.grayExtraDark, ToggleInput, colors.gray, ToggleInput, colors.primary);

var Toggle =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Toggle, _React$PureComponent);

  function Toggle() {
    (0, _classCallCheck2.default)(this, Toggle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Toggle).apply(this, arguments));
  }

  (0, _createClass2.default)(Toggle, [{
    key: "render",
    value: function render() {
      return React.createElement(ToggleContainer, null, React.createElement(ToggleInput, (0, _extends2.default)({
        type: "checkbox"
      }, this.props)), React.createElement(ToggleLabel, {
        htmlFor: this.props.id
      }));
    }
  }]);
  return Toggle;
}(React.PureComponent);

(0, _defineProperty2.default)(Toggle, "defaultProps", {
  checked: false
});
(0, _defineProperty2.default)(Toggle, "propTypes", {
  checked: _propTypes.default.bool
});
var _default = Toggle;
exports.default = _default;