"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.names = exports.glyphs = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _theme = _interopRequireDefault(require("../../config/theme"));

var colors = _theme.default.colors;
var glyphs = {
  add: React.createElement("g", null, React.createElement("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  })),
  download: React.createElement("path", {
    d: "M58.015,8.471H52.368V0H43.9V8.471H38.25l9.882,9.882ZM38.25,21.176V24H58.015V21.176Z",
    transform: "translate(-38.25)"
  }),
  help: React.createElement("g", null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "12",
    fill: "none"
  }), React.createElement("path", {
    d: "M21.3,21.762V23.35H16.62V21.042c0-2.657,4-4.159,4-5.745A1.852,1.852,0,0,0,18.758,13.5c-1.082,0-1.968.983-2.823,2.137L13,12.8C14.762,10.456,16.8,9,19.312,9,22.66,9,25.3,11.459,25.3,15.355c0,3.752-4,4.676-4,6.408ZM18.638,29.5A2.563,2.563,0,1,1,21.2,26.937,2.562,2.562,0,0,1,18.638,29.5Z",
    transform: "translate(-7 -7)",
    fillRule: "evenodd"
  })),
  settings: React.createElement("path", {
    d: "M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
  }),
  phone: React.createElement("path", {
    d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
  }),
  notifications: React.createElement("path", {
    d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
  }),
  more: React.createElement("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }),
  email: React.createElement("path", {
    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
  })
};
exports.glyphs = glyphs;
var names = Object.keys(glyphs);
exports.names = names;

var Icon = function Icon(_ref) {
  var as = _ref.as,
      name = _ref.name,
      size = _ref.size,
      color = _ref.color,
      onClick = _ref.onClick,
      variant = _ref.variant,
      props = (0, _objectWithoutProperties2.default)(_ref, ["as", "name", "size", "color", "onClick", "variant"]);
  var Component = as;
  var child = React.createElement(Component, (0, _extends2.default)({
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: "1.414",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": name,
    viewBox: "0 0 24 24",
    preserveAspectRatio: "xMidYMid meet",
    fill: color,
    width: size,
    height: size
  }, props), glyphs[name]);

  if (typeof onClick === 'function') {
    return React.createElement(_styles.Button, {
      onClick: onClick,
      variant: variant
    }, child);
  }

  return child;
};

Icon.propTypes = {
  as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.element]),
  name: _propTypes.default.oneOf(names),
  size: _propTypes.default.number,
  color: _propTypes.default.string
};
Icon.VARIANTS = _styles.VARIANTS;
Icon.defaultProps = {
  as: 'svg',
  name: 'more',
  size: 24,
  color: colors.grayExtraDark
};
var _default = Icon;
exports.default = _default;