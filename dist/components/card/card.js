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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var Card =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Card, _React$PureComponent);

  function Card() {
    (0, _classCallCheck2.default)(this, Card);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Card).apply(this, arguments));
  }

  (0, _createClass2.default)(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          renderHeader = _this$props.renderHeader,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["title", "description", "renderHeader", "children"]);
      return React.createElement(_styles.StyledCard, props, typeof renderHeader === 'function' ? renderHeader({
        title: title,
        description: description
      }) : React.createElement(Card.Header, null, React.createElement(Card.Title, null, title), description.length > 0 && React.createElement(Card.Description, null, description)), React.createElement(Card.Content, null, children));
    }
  }]);
  return Card;
}(React.PureComponent);

(0, _defineProperty2.default)(Card, "propTypes", {
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  padding: _propTypes.default.string.isRequired,
  margin: _propTypes.default.string.isRequired
});
(0, _defineProperty2.default)(Card, "defaultProps", {
  title: '',
  description: ''
});
(0, _defineProperty2.default)(Card, "Header", _styles.StyledCardHeader);
(0, _defineProperty2.default)(Card, "Title", _styles.StyledCardTitle);
(0, _defineProperty2.default)(Card, "Description", _styles.StyledCardDescription);
(0, _defineProperty2.default)(Card, "Content", _styles.StyledContent);
var _default = Card;
exports.default = _default;