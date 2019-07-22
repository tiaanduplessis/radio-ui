'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var styledSystem = require('styled-system');

var addAliases = function addAliases(arr, aliases) {
  return aliases.forEach(function (key, i) {
    return Object.defineProperty(arr, key, {
      enumerable: false,
      get: function get() {
        return this[i];
      }
    });
  });
};

var space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
var fontSizes = ['0.5em', '0.625em', '0.75em', '0.875em', '1em', '1.25em', '1.5em', '2em', '3em', '4em', '5em', ''];
var fontSizeAliases = ['xxxsmall', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
addAliases(fontSizes, fontSizeAliases);
var colors = {
  white: '#fff',
  gray: ['#f4f3f4', '#dfdfdf', '#d0d0d0', '#777879', '#80g8080', '#47494B'],
  black: '#333',
  transparent: 'transparent',
  blue: ['#80dcff', '#4dceff', '#00abeb', '#0082b3', '#005d80'],
  green: '#37b049',
  red: ['#f6bdbb', '#ed7470', '#e53933', '#9f1814', '#71110e'],
  yellow: '#f8b31c',
  orange: ['#fff8eb', '#ffa400']
};
colors.primary = colors.orange[1];
var orangeColorAliases = ['primaryLight', 'primary'];
addAliases(colors.orange, orangeColorAliases);
var grayColorAliases = ['xlight', 'light', 'default', 'dark', 'xdark', 'xxdark'];
addAliases(colors.gray, grayColorAliases);
var fallbackFontStack = "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif";
var fonts = ['Montserrat', 'Open Sans'].map(function (font) {
  return "".concat(font, ", ").concat(fallbackFontStack);
});
var fontsAliases = ['Montserrat', 'OpenSans'];
addAliases(fonts, fontsAliases);
var fontWeights = [100, 200, 300, 400, 500, 600, 700];
var fontWeightsAliases = ['hairline', 'thin', 'light', 'medium', 'semi', 'bold', 'extrabold'];
addAliases(fontWeights, fontWeightsAliases);
var lineHeights = [1, 1.25, 1.375, 1.5, 1.625, 2];
var lineHeightsAliases = ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'];
addAliases(lineHeights, lineHeightsAliases);
var letterSpacings = ['-0.05em', '-0.025em', '0', '0.025em', '0.05em', '0.1em'];
var letterSpacingsAliases = ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'];
addAliases(letterSpacings, letterSpacingsAliases);
var shadowColor = 'rgba(0, 0, 0, 0.12)';
var baseShadow = '0 0 2px 0 rgba(0,0,0,.0625),';
var shadows = ["".concat(baseShadow, "0 2px 4px 0 ").concat(shadowColor), "".concat(baseShadow, "0 4px 8px 0 ").concat(shadowColor), "".concat(baseShadow, "0 12px 12px 0 ").concat(shadowColor), "".concat(baseShadow, "0 24px 24px 0 ").concat(shadowColor)];
var radii = [0, '2px', '5px', '15px', '20px', '9999px'];
var radiiAliases = ['none', 'xsmall', 'small', 'large', 'xlarge', 'full'];
addAliases(radii, radiiAliases);
var zIndices = [1, 2, 3, 4, 5];
var breakpoints = ['20em', '40em', '52em', '64em', '80em'];
var mediaQueries = breakpoints.map(function (val) {
  return "@media screen and (min-width: ".concat(val, ")");
});
var mediaQueriesAliases = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
addAliases(mediaQueries, mediaQueriesAliases);
var buttons = {
  primary: {
    color: colors.white,
    backgroundColor: colors.orange[1],
    boxShadow: shadows[2],
    fontWeight: fontWeights[5]
  },
  secondary: {
    color: colors.white,
    backgroundColor: colors.gray[2],
    boxShadow: shadows[2],
    fontWeight: fontWeights[5]
  },
  ternary: {
    color: colors.gray[5],
    backgroundColor: colors.white,
    boxShadow: shadows[2],
    fontWeight: fontWeights[5]
  },
  minimal: {
    color: colors.orange[1],
    backgroundColor: colors.transparent,
    fontWeight: fontWeights[5]
  },
  danger: {
    color: colors.white,
    backgroundColor: colors.red[1],
    boxShadow: shadows[2],
    fontWeight: fontWeights[5]
  }
};
var theme = {
  space: space,
  fontSizes: fontSizes,
  colors: colors,
  fonts: fonts,
  fontWeights: fontWeights,
  lineHeights: lineHeights,
  letterSpacings: letterSpacings,
  shadows: shadows,
  radii: radii,
  zIndices: zIndices,
  breakpoints: breakpoints,
  mediaQueries: mediaQueries,
  buttons: buttons
};

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;
  return React.createElement(styled.ThemeProvider, {
    theme: theme
  }, children);
};

ThemeProvider.propTypes = {
  theme: PropTypes.object
};
var themeProvider = React.memo(ThemeProvider);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var taggedTemplateLiteral = _taggedTemplateLiteral;

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  html,\n  body,\n  div,\n  span,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  abbr,\n  code,\n  em,\n  img,\n  small,\n  strong,\n  sub,\n  sup,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  footer,\n  header,\n  nav,\n  section,\n  time,\n  audio,\n  video {\n  font-size: 100%;\n  font-weight: inherit;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline;\n  border: 0;\n  background-color: transparent;\n}\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    outline: transparent;\n  }\n\n\n  html, body {\n    height: 100%;\n     overflow-y: scroll;\n    box-sizing: border-box;\n    font-family: ", ";\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  article,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsmall,\nhgroup,\nsummary {\n  display: block;\n}\n\n\n\nimg,\nembed,\niframe,\nobject,\naudio,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\niframe {\n  border: 0;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: \"\";\n  content: none;\n}\nul,\nli {\n  list-style: none;\n}\nsup {\n  vertical-align: text-top;\n}\nsub {\n  vertical-align: text-bottom;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ncaption,\nth,\ntd {\n  font-weight: normal;\n  text-align: left;\n  vertical-align: top;\n}\ninput {\n  line-height: normal;\n  border-radius: ", ";\n}\ninput,\nselect {\n  vertical-align: middle;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n  text-transform: none;\n  border: 0;\n  font-family: inherit;\n}\ninput[type=\"radio\"] {\n  vertical-align: text-bottom;\n}\ninput[type=\"checkbox\"] {\n  vertical-align: bottom;\n}\ninput::-ms-clear {\n  display: none;\n}\ninput::-ms-reveal {\n  display: none;\n}\nstrong,\nb {\n  font-weight: bold;\n}\nsmall {\n  font-size: 80%;\n}\nabbr,\nacronym {\n  cursor: help;\n  text-decoration: none;\n  border-bottom: 0.1em dotted;\n}\na:active,\na:hover {\n  outline-width: 0;\n}\nlabel,\ninput[type=\"file\"],\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"],\n[role=\"button\"] {\n  cursor: pointer;\n}\n[disabled] {\n  cursor: default;\n}\nimg {\n  border-style: none;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Normalize = styled.createGlobalStyle(_templateObject(), function (props) {
  return props.theme.fonts[0];
}, function (props) {
  return props.theme.radii[0];
});
Normalize.defaultProps = {
  theme: theme
};
Normalize.displayName = 'Normalize';

function _templateObject$1() {
  var data = taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: auto; /* new - was 1px */\n  margin: 0; /* new - was -1px */\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap; /* 1 */\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Visuallyhidden = styled__default.span(_templateObject$1());
Visuallyhidden.displayName = 'Visuallyhidden';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject$2() {
  var data = taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Box = styled__default.div(_templateObject$2(), styledSystem.space, styledSystem.layout, styledSystem.color, styledSystem.flexbox);
Box.displayName = 'Box';
Box.defaultProps = {
  theme: theme
};
Box.propTypes = _objectSpread({}, styledSystem.space.propTypes, {}, styledSystem.layout.propTypes, {}, styledSystem.color.propTypes, {}, styledSystem.flexbox.propTypes);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject$3() {
  var data = taggedTemplateLiteral(["\n  font-weight: ", ";\n  font-family: ", ";\n  min-width: 120px;\n  width: ", ";\n  border: none;\n  cursor: pointer;\n  transition: transform 0.1s;\n  &:active {\n    transform: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var SHAPES = {
  square: 'square',
  round: 'round',
  rounded: 'rounded',
  block: 'block'
};
var SIZES = {
  compact: 'compact',
  default: 'default',
  large: 'large'
};

var radius = function radius(props) {
  return {
    borderRadius: props.shape === SHAPES.rounded ? props.theme.radii.large : props.theme.radii.small
  };
};

var size = function size(props) {
  return {
    fontSize: props.size === SIZES.large ? props.theme.fontSizes.medium : props.theme.fontSizes.small,
    padding: props.size === SIZES.compact ? '5px 10px' : props.size === SIZES.default ? '10px 20px' : '15px 40px'
  };
};

var StyledButton = styled__default.button.attrs({
  type: 'button'
})(_templateObject$3(), function (props) {
  return props.theme.fontWeights.bold;
}, function (props) {
  return props.theme.fonts[0];
}, function (props) {
  return props.shape === SHAPES.block ? '100%' : 'auto';
}, function (props) {
  return props.shape === SHAPES.block ? 'scale(0.99)' : 'scale(0.95)';
}, styledSystem.buttonStyle, radius, size, styledSystem.space, styledSystem.layout, styledSystem.typography);

var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Button, _React$PureComponent);

  function Button() {
    classCallCheck(this, Button);

    return possibleConstructorReturn(this, getPrototypeOf(Button).apply(this, arguments));
  }

  createClass(Button, [{
    key: "render",
    value: function render() {
      return React.createElement(StyledButton, this.props, this.props.children);
    }
  }]);

  return Button;
}(React.PureComponent);

defineProperty(Button, "SHAPES", SHAPES);

defineProperty(Button, "SIZES", SIZES);

defineProperty(Button, "propTypes", _objectSpread$1({
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  shape: PropTypes.oneOf(Object.keys(SHAPES)),
  size: PropTypes.oneOf(Object.keys(SIZES))
}, styledSystem.space.propTypes, {}, styledSystem.layout.propTypes, {}, styledSystem.typography.propTypes));

defineProperty(Button, "defaultProps", {
  shape: Button.SHAPES.square,
  size: Button.SIZES.default,
  theme: theme
});

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  margin: 1em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  margin: 1em 1em 2em;\n  padding-bottom: 2em;\n  border-bottom: 3px solid ", ";\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  padding-right: 5em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  font-size: ", ";\n  font-family: ", ";\n  border-left: 5px solid ", ";\n  font-weight: ", ";\n  padding: 0 0.5em;\n  text-transform: uppercase;\n  letter-spacing: ", ";\n  color: ", ";\n  margin: 1em;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: ", ";\n  margin: 1em 0;\n  padding: 1.5em;\n  box-shadow: ", ";\n  flex: 1;\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCard = styled__default.section(_templateObject$4(), function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.radii.large;
}, function (props) {
  return props.theme.shadows[0];
}, styledSystem.space, styledSystem.layout, styledSystem.flexbox);
var StyledCardHeader = styled__default.header(_templateObject2());
var StyledCardTitle = styled__default.h2(_templateObject3(), function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.theme.fonts[0];
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.fontWeights.extrabold;
}, function (props) {
  return props.theme.letterSpacings.tight;
}, function (props) {
  return props.theme.colors.gray[4];
});
var StyledCardDescription = styled__default.p(_templateObject4(), function (props) {
  return props.theme.colors.gray[0];
}, function (props) {
  return props.theme.colors.gray[3];
}, function (props) {
  return props.theme.fontWeights.thin;
}, function (props) {
  return props.theme.fontSizes.small;
});
var StyledContent = styled__default.div(_templateObject5());

var Card =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Card, _React$PureComponent);

  function Card() {
    classCallCheck(this, Card);

    return possibleConstructorReturn(this, getPrototypeOf(Card).apply(this, arguments));
  }

  createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          renderHeader = _this$props.renderHeader,
          children = _this$props.children,
          theme = _this$props.theme,
          props = objectWithoutProperties(_this$props, ["title", "description", "renderHeader", "children", "theme"]);

      return React.createElement(StyledCard, _extends_1({
        theme: theme
      }, props), typeof renderHeader === 'function' ? renderHeader({
        title: title,
        description: description
      }) : React.createElement(Card.Header, {
        theme: theme
      }, React.createElement(Card.Title, {
        theme: theme
      }, title), description.length > 0 && React.createElement(Card.Description, {
        theme: theme
      }, description)), React.createElement(Card.Content, {
        theme: theme
      }, children));
    }
  }]);

  return Card;
}(React.PureComponent);

defineProperty(Card, "defaultProps", {
  title: '',
  description: '',
  theme: theme
});

defineProperty(Card, "propTypes", _objectSpread$2({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}, styledSystem.space.propTypes, {}, styledSystem.layout.propTypes, {}, styledSystem.flexbox.propTypes));

defineProperty(Card, "Header", StyledCardHeader);

defineProperty(Card, "Title", StyledCardTitle);

defineProperty(Card, "Description", StyledCardDescription);

defineProperty(Card, "Content", StyledContent);

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject$5() {
  var data = taggedTemplateLiteral(["\n  color: ", ";\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Text = styled__default.p(_templateObject$5(), function (props) {
  return props.theme.colors.gray.xxdark;
}, styledSystem.typography, styledSystem.space, styledSystem.color);
Text.defaultProps = {
  theme: theme
};
Text.propTypes = _objectSpread$3({}, styledSystem.typography.propTypes, {}, styledSystem.space.propTypes, {}, styledSystem.color.propTypes);
Text.displayName = 'Text';

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject$6() {
  var data = taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  padding: 1em;\n  min-width: 80px;\n  border-radius: ", ";\n  box-shadow: ", ";\n  border: none;\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  ", "\n  ", "\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var VARIANTS = {
  active: 'active',
  inactive: 'inactive'
};
var StyledPill = styled__default.button.attrs({
  type: 'button'
})(_templateObject$6(), function (props) {
  return props.theme.colors.transparent;
}, function (props) {
  return props.variant === VARIANTS.active ? props.theme.colors.primary : props.theme.colors.gray.xdark;
}, function (props) {
  return props.theme.radii.full;
}, function (props) {
  return props.variant === VARIANTS.active ? props.theme.shadows[1] : 'none';
}, function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.theme.fontWeights.bold;
}, function (props) {
  return props.theme.fonts[0];
}, styledSystem.space, styledSystem.layout);
StyledPill.displayName = 'Pill';

var Pill =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Pill, _React$PureComponent);

  function Pill() {
    classCallCheck(this, Pill);

    return possibleConstructorReturn(this, getPrototypeOf(Pill).apply(this, arguments));
  }

  createClass(Pill, [{
    key: "render",
    value: function render() {
      return React.createElement(StyledPill, this.props);
    }
  }]);

  return Pill;
}(React.PureComponent);

defineProperty(Pill, "VARIANTS", VARIANTS);

defineProperty(Pill, "defaultProps", {
  theme: theme,
  variant: VARIANTS.inactive
});

defineProperty(Pill, "propTypes", _objectSpread$4({
  variant: PropTypes.oneOf(Object.keys(VARIANTS))
}, styledSystem.space.propTypes, {}, styledSystem.layout.propTypes));

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject$7() {
  var data = taggedTemplateLiteral(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var SHAPES$1 = {
  square: 'square',
  round: 'round',
  rounded: 'rounded'
};

var shape = function shape(props) {
  if (props.shape === SHAPES$1.round) {
    return {
      borderRadius: props.theme.radii.full
    };
  }

  if (props.shape === SHAPES$1.rounded) {
    return {
      borderRadius: props.theme.radii.large
    };
  }

  return props.theme.radii.none;
};

var Image = styled__default.img.attrs({
  alt: ''
})(_templateObject$7(), shape, styledSystem.layout, styledSystem.shadow);
Image.displayName = 'Image';
Image.propTypes = _objectSpread$5({}, styledSystem.layout.propTypes);
Image.defaultProps = {
  theme: theme,
  shape: SHAPES$1.square
};

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf$1 = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf$1(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty$1(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var mapProps = function mapProps(map) {
  return function (Component) {
    return hoistNonReactStatics_cjs(function (props) {
      return React.createElement(Component, map(props));
    }, Component);
  };
};
var errorForField = function errorForField(errors, touched, fieldname) {
  return errors[fieldname] && touched[fieldname] ? errors[fieldname] : '';
};

function _templateObject$8() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Flex = mapProps(function (_ref) {
  var wrap = _ref.wrap,
      align = _ref.align,
      justify = _ref.justify,
      props = objectWithoutProperties(_ref, ["wrap", "align", "justify"]);

  return _objectSpread$6({
    flexWrap: wrap ? 'wrap' : 'no-wrap',
    alignItems: align,
    justifyContent: justify
  }, props);
})(styled__default.div(_templateObject$8(), styledSystem.space, styledSystem.layout, styledSystem.color, styledSystem.alignItems, styledSystem.justifyContent, styledSystem.flexDirection, styledSystem.flexWrap));
Flex.defaultProps = {
  theme: theme
};
Flex.propTypes = _objectSpread$6({}, styledSystem.space.propTypes, {}, styledSystem.layout.propTypes, {}, styledSystem.color.propTypes, {}, styledSystem.alignItems.propTypes, {}, styledSystem.justifyContent.propTypes, {}, styledSystem.flexWrap.propTypes, {}, styledSystem.flexDirection.propTypes);
Flex.displayName = 'Flex';

function _templateObject3$1() {
  var data = taggedTemplateLiteral(["\n  display: inline-block;\n  width: 100%;\n  cursor: pointer;\n\n  &::before {\n    content: '';\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 3px 11px 3px 1px;\n    border: solid 2px; /* Safari */\n    border-color: rgba(0, 0, 0, 0.6);\n    border-radius: ", ";\n    width: 18px;\n    height: 18px;\n    vertical-align: top;\n    transition: border-color 0.2s, background-color 0.2s;\n  }\n\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 4px;\n    left: 2px;\n    width: 10px;\n    height: 5px;\n    border: solid 2px transparent;\n    border-right: none;\n    border-top: none;\n    transform: translate(3px, 4px) rotate(-45deg);\n  }\n\n  ", ":checked + &::before,\n  ", ":indeterminate + &::before {\n    border-color: ", ";\n    background-color: ", ";\n  }\n\n  ", ":checked + &::after,\n  ", ":indeterminate + &::after {\n    border-color: rgb(255, 255, 255);\n  }\n\n  ", ":indeterminate + &::after {\n    border-left: none;\n    transform: translate(4px, 3px);\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = taggedTemplateLiteral(["\n  z-index: 0;\n  position: relative;\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: ", ";\n  font-size: ", ";\n  line-height: ", ";\n\n  &:hover > ", " {\n    opacity: 0.04;\n  }\n\n  &:hover > ", ":focus {\n    opacity: 0.16;\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = taggedTemplateLiteral(["\n  appearance: none;\n  z-index: -1;\n  position: absolute;\n  left: -10px;\n  top: -8px;\n  display: block;\n  margin: 0;\n  border-radius: ", ";\n  width: 40px;\n  height: 40px;\n  background-color: rgba(0, 0, 0, 0.6);\n  box-shadow: none;\n  outline: none;\n  opacity: 0;\n  transform: scale(1);\n  pointer-events: none;\n  transition: opacity 0.3s, transform 0.2s;\n\n  &:checked,\n  &:indeterminate {\n    background-color: ", ";\n  }\n\n  &:active {\n    opacity: 1;\n    transform: scale(0);\n    transition: transform 0s, opacity 0s;\n  }\n\n  &:active + span::before {\n    border-color: ", ";\n  }\n\n  &:checked:active + span::before {\n    border-color: transparent;\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n\n  &:disabled {\n    opacity: 0;\n  }\n\n  &:disabled + span {\n    color: rgba(0, 0, 0, 0.3);\n    cursor: initial;\n  }\n\n  &:disabled + span::before {\n    border-color: rgba(0, 0, 0, 0.3);\n  }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput = styled__default.input.attrs({
  type: 'checkbox'
})(_templateObject$9(), function (props) {
  return props.theme.radii.full;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
var StyledLabel = styled__default.label(_templateObject2$1(), function (props) {
  return props.theme.fonts[0];
}, function (props) {
  return props.theme.fontSizes.medium;
}, function (props) {
  return props.theme.lineHeights.normal;
},
/* sc-selector */
StyledInput,
/* sc-selector */
StyledInput, styledSystem.space, styledSystem.layout);
var StyledSpan = styled__default.span(_templateObject3$1(), function (props) {
  return props.theme.radii.xsmall;
},
/* sc-selector */
StyledInput,
/* sc-selector */
StyledInput, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
},
/* sc-selector */
StyledInput,
/* sc-selector */
StyledInput,
/* sc-selector */
StyledInput);

var Checkbox =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Checkbox, _React$PureComponent);

  function Checkbox() {
    classCallCheck(this, Checkbox);

    return possibleConstructorReturn(this, getPrototypeOf(Checkbox).apply(this, arguments));
  }

  createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme,
          onChange = _this$props.onChange,
          value = _this$props.value,
          onBlur = _this$props.onBlur,
          props = objectWithoutProperties(_this$props, ["children", "theme", "onChange", "value", "onBlur"]);

      return React.createElement(StyledLabel, _extends_1({
        theme: theme
      }, props), React.createElement(StyledInput, {
        theme: theme,
        onChange: onChange,
        onBlur: onBlur,
        checked: value
      }), React.createElement(StyledSpan, {
        theme: theme
      }, children));
    }
  }]);

  return Checkbox;
}(React.PureComponent);

defineProperty(Checkbox, "defaultProps", {
  theme: theme
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var key = '__global_unique_id__';

var gud = function() {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var implementation = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _gud2 = _interopRequireDefault(gud);



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(React__default.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(React__default.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

unwrapExports(implementation);

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default);



var _implementation2 = _interopRequireDefault(implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
});

var createContext = unwrapExports(lib);

var _a;
var FormikProvider = (_a =
/*#__PURE__*/
createContext({}), _a.Provider),
    FormikConsumer = _a.Consumer;
function connect(Comp) {
  var C = function (props) {
    return React.createElement(FormikConsumer, null, function (formik) {
      return React.createElement(Comp, __assign({}, props, {
        formik: formik
      }));
    });
  };

  var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || 'Component';
  C.WrappedComponent = Comp;
  C.displayName = "FormikConnect(" + componentDisplayName + ")";
  return hoistNonReactStatics_cjs(C, Comp);
}

var Form =
/*#__PURE__*/
connect(function (_a) {
  var _b = _a.formik,
      handleReset = _b.handleReset,
      handleSubmit = _b.handleSubmit,
      props = __rest(_a, ["formik"]);

  return React.createElement("form", __assign({
    onReset: handleReset,
    onSubmit: handleSubmit
  }, props));
});
Form.displayName = 'Form';

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject4$1() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: ", ";\n  font-style: italic;\n  color: ", ";\n  font-weight: ", ";\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid\n    ", ";\n  font-family: inherit;\n  font-size: ", ";\n  padding: 0.5em 1em;\n  height: 35px;\n  border-radius: ", ";\n  width: 100%;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    /* stylelint-disable-next-line property-no-vendor-prefix */\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = taggedTemplateLiteral(["\n  min-width: 300px;\n  width: 45%;\n  margin-bottom: 1.5em;\n  position: relative;\n  @media (max-width: 990px) {\n    width: 100%;\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = taggedTemplateLiteral(["\n  display: block;\n  font-family: inherit;\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  margin-bottom: 0.4em;\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}

function createDefaultInputProps(_ref) {
  var formik = _ref.formik,
      name = _ref.name,
      onBlur = _ref.onBlur,
      value = _ref.value,
      onChange = _ref.onChange;
  var hasFormik = formik && Object.values(formik).length > 0;
  return {
    onBlur: hasFormik ? formik.handleBlur : onBlur,
    value: hasFormik ? formik.values[name] : value,
    onChange: hasFormik ? function (_ref2) {
      var target = _ref2.target;
      return formik.setFieldValue(name, target.value);
    } : onChange,
    alertText: hasFormik ? errorForField(formik.errors, formik.touched, name) : ''
  };
}

var StyledLabel$1 = styled__default.label(_templateObject$a(), function (props) {
  return props.theme.colors.gray.xxdark;
}, function (props) {
  return props.theme.fontWeights.bold;
}, function (props) {
  return props.theme.fontSizes.xsmall;
});
StyledLabel$1.displayName = 'InputLabel';
var StyledInputContainer = styled__default.div(_templateObject2$2(), styledSystem.space, styledSystem.layout);
StyledInputContainer.displayName = 'InputContainer';
var StyledInput$1 = styled__default.input(_templateObject3$2(), function (props) {
  return props.disabled ? props.theme.colors.transparent : props.theme.colors.gray.xlight;
}, function (props) {
  return props.disabled ? props.theme.colors.gray.default : props.theme.colors.gray.xlight;
}, function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.theme.radii.small;
}, function (props) {
  return props.theme.colors.gray.xxdark;
});
StyledInput$1.displayName = 'Input';
var StyledAlertText = styled__default.span.attrs({
  role: 'alert'
})(_templateObject4$1(), function (props) {
  return props.theme.fontSizes.xsmall;
}, function (props) {
  return props.theme.colors.red[1];
}, function (props) {
  return props.theme.fontWeights.bold;
});

var Input =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Input, _React$PureComponent);

  function Input() {
    classCallCheck(this, Input);

    return possibleConstructorReturn(this, getPrototypeOf(Input).apply(this, arguments));
  }

  createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          placeholder = _this$props.placeholder,
          inputStyle = _this$props.inputStyle,
          alertStyle = _this$props.alertStyle,
          name = _this$props.name,
          formik = _this$props.formik,
          alertTextOverride = _this$props.alertText,
          disabled = _this$props.disabled,
          theme = _this$props.theme,
          value = _this$props.value,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          otherProps = objectWithoutProperties(_this$props, ["id", "label", "placeholder", "inputStyle", "alertStyle", "name", "formik", "alertText", "disabled", "theme", "value", "onBlur", "onChange"]);

      var _createDefaultInputPr = createDefaultInputProps({
        value: value,
        onBlur: onBlur,
        onChange: onChange,
        name: name,
        formik: formik
      }),
          alertText = _createDefaultInputPr.alertText,
          inputDefaults = objectWithoutProperties(_createDefaultInputPr, ["alertText"]);

      return React.createElement(StyledInputContainer, _extends_1({
        theme: theme
      }, otherProps), !!label.length && React.createElement(StyledLabel$1, {
        theme: theme,
        htmlFor: id,
        required: otherProps.required
      }, label), React.createElement(StyledInput$1, _extends_1({
        theme: theme,
        style: inputStyle,
        "aria-label": label,
        "aria-required": otherProps.required,
        placeholder: placeholder || label,
        disabled: disabled,
        name: name
      }, inputDefaults)), alertText || alertTextOverride && React.createElement(StyledAlertText, {
        style: alertStyle
      }, alertText || alertTextOverride));
    }
  }]);

  return Input;
}(React.PureComponent);

defineProperty(Input, "propTypes", _objectSpread$7({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  alertText: PropTypes.string,
  inputStyle: PropTypes.object
}, styledSystem.layout.propTypes, {}, styledSystem.space.propTypes));

defineProperty(Input, "defaultProps", {
  label: '',
  inputStyle: {},
  theme: theme
});

var input = connect(Input);

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3$3() {
  var data = taggedTemplateLiteral(["\n  cursor: pointer;\n  position: relative;\n  height: 40px;\n  background-color: ", ";\n\n  ::before {\n    background: ", ";\n    border-radius: 8px;\n    content: '';\n    height: 15px;\n    margin-top: 15px;\n    position: absolute;\n    opacity: 0.3;\n    transition: all 0.4s ease-in-out;\n    width: 40px;\n  }\n\n  ::after {\n    background: ", ";\n    border-radius: 16px;\n    box-shadow: ", ";\n    content: '';\n    height: 24px;\n    left: 0px;\n    margin-top: 13px;\n    position: absolute;\n    top: -3px;\n    transition: all 0.3s ease-in-out;\n    width: 24px;\n  }\n\n  /* stylelint-disable-next-line selector-type-no-unknown */\n  ", ":checked + &::before {\n    background: ", ";\n    opacity: 0.5;\n  }\n\n  /* stylelint-disable-next-line selector-type-no-unknown */\n  ", ":checked + &::after {\n    background: ", ";\n    left: 20px;\n  }\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = taggedTemplateLiteral(["\n  display: none;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = taggedTemplateLiteral(["\n  display: block;\n  padding-bottom: 3px;\n  width: 60px;\n  height: 40px;\n  position: relative;\n  ", "\n  ", "\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var ToggleContainer = styled__default.div(_templateObject$b(), styledSystem.space, styledSystem.layout);
var ToggleInput = styled__default.input(_templateObject2$3());
var ToggleLabel = styled__default.label(_templateObject3$3(), function (props) {
  return props.theme.colors.gray.xdark;
}, function (props) {
  return props.theme.colors.gray.default;
}, function (props) {
  return props.theme.colors.gray.xdark;
}, function (props) {
  return props.theme.shadows[0];
}, ToggleInput, function (props) {
  return props.theme.colors.gray.default;
}, ToggleInput, function (props) {
  return props.theme.colors.primary;
});

var Toggle =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Toggle, _React$PureComponent);

  function Toggle() {
    classCallCheck(this, Toggle);

    return possibleConstructorReturn(this, getPrototypeOf(Toggle).apply(this, arguments));
  }

  createClass(Toggle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          inputStyle = _this$props.inputStyle,
          checked = _this$props.checked,
          otherProps = objectWithoutProperties(_this$props, ["theme", "id", "onBlur", "onChange", "inputStyle", "checked"]);

      return React.createElement(ToggleContainer, _extends_1({
        theme: theme
      }, otherProps), React.createElement(ToggleInput, {
        style: inputStyle,
        checked: checked,
        onChange: onChange,
        onBlur: onBlur,
        id: id,
        theme: theme,
        type: "checkbox"
      }), React.createElement(ToggleLabel, {
        theme: theme,
        htmlFor: this.props.id
      }));
    }
  }]);

  return Toggle;
}(React.PureComponent);

defineProperty(Toggle, "defaultProps", {
  checked: false,
  inputStyle: {},
  theme: theme
});

defineProperty(Toggle, "propTypes", _objectSpread$8({
  checked: PropTypes.bool
}, styledSystem.layout.propTypes, {}, styledSystem.space.propTypes));

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject$c() {
  var data = taggedTemplateLiteral(["\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}

var image = function image(props) {
  return "url(".concat(props.source, ")");
};

var BackgroundImage = styled__default.div(_templateObject$c(), image, styledSystem.space, styledSystem.background, styledSystem.layout, styledSystem.flexbox);
BackgroundImage.defaultProps = {
  theme: theme
};
BackgroundImage.propTypes = _objectSpread$9({
  source: PropTypes.string.isRequired
}, styledSystem.space.propTypes, {}, styledSystem.background.propTypes, {}, styledSystem.layout.propTypes, {}, styledSystem.flexbox.propTypes);
BackgroundImage.displayName = 'BackgroundImage';

exports.BackgroundImage = BackgroundImage;
exports.Box = Box;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Flex = Flex;
exports.Image = Image;
exports.Input = input;
exports.Normalize = Normalize;
exports.Pill = Pill;
exports.Text = Text;
exports.ThemeProvider = themeProvider;
exports.Toggle = Toggle;
exports.Visuallyhidden = Visuallyhidden;
exports.theme = theme;
