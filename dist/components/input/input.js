"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formik = require("formik");

var _utils = require("./utils");

var _styles = require("./styles");

var Input =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Input, _React$PureComponent);

  function Input() {
    (0, _classCallCheck2.default)(this, Input);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Input).apply(this, arguments));
  }

  (0, _createClass2.default)(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          placeholder = _this$props.placeholder,
          width = _this$props.width,
          containerStyle = _this$props.containerStyle,
          errorStyle = _this$props.errorStyle,
          name = _this$props.name,
          formik = _this$props.formik,
          errorTextOverride = _this$props.errorText,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["id", "label", "placeholder", "width", "containerStyle", "errorStyle", "name", "formik", "errorText"]);

      var _createDefaultInputPr = (0, _utils.createDefaultInputProps)({
        name: name,
        formik: formik
      }),
          errorText = _createDefaultInputPr.errorText,
          inputDefaults = (0, _objectWithoutProperties2.default)(_createDefaultInputPr, ["errorText"]);

      return React.createElement(_styles.StyledInputContainer, {
        style: containerStyle,
        width: width
      }, !!label.length && React.createElement(_styles.StyledLabel, {
        htmlFor: id,
        required: otherProps.required
      }, label), React.createElement(_styles.StyledInput, (0, _extends2.default)({
        "aria-label": label,
        "aria-required": otherProps.required,
        placeholder: placeholder || label,
        name: name
      }, inputDefaults, otherProps)), errorText && React.createElement(_styles.StyledErrorText, {
        style: errorStyle
      }, errorTextOverride || errorText));
    }
  }]);
  return Input;
}(React.PureComponent);

(0, _defineProperty2.default)(Input, "propTypes", {
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  errorText: _propTypes.default.string,
  containerStyle: _propTypes.default.object,
  width: _propTypes.default.string
});
(0, _defineProperty2.default)(Input, "defaultProps", {
  label: '',
  containerStyle: {}
});

var _default = (0, _formik.connect)(Input);

exports.default = _default;