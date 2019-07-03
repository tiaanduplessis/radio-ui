"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("../../config/theme"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  html,\n  body,\n  div,\n  span,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  abbr,\n  code,\n  em,\n  img,\n  small,\n  strong,\n  sub,\n  sup,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  footer,\n  header,\n  nav,\n  section,\n  time,\n  audio,\n  video {\n  font-size: 100%;\n  font-weight: inherit;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline;\n  border: 0;\n  background-color: transparent;\n}\n\n  *,\n  *::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    outline: transparent;\n  }\n\n\n  html, body {\n    height: 100%;\n     overflow-y: scroll;\n    box-sizing: border-box;\n    font-family: ", ";\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  article,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsmall,\nhgroup,\nsummary {\n  display: block;\n}\n\n\n\nimg,\nembed,\niframe,\nobject,\naudio,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\niframe {\n  border: 0;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: \"\";\n  content: none;\n}\nul,\nli {\n  list-style: none;\n}\nsup {\n  vertical-align: text-top;\n}\nsub {\n  vertical-align: text-bottom;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ncaption,\nth,\ntd {\n  font-weight: normal;\n  text-align: left;\n  vertical-align: top;\n}\ninput {\n  line-height: normal;\n  border-radius: ", ";\n}\ninput,\nselect {\n  vertical-align: middle;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n  text-transform: none;\n  border: 0;\n  font-family: inherit;\n}\ninput[type=\"radio\"] {\n  vertical-align: text-bottom;\n}\ninput[type=\"checkbox\"] {\n  vertical-align: bottom;\n}\ninput::-ms-clear {\n  display: none;\n}\ninput::-ms-reveal {\n  display: none;\n}\nstrong,\nb {\n  font-weight: bold;\n}\nsmall {\n  font-size: 80%;\n}\nabbr,\nacronym {\n  cursor: help;\n  text-decoration: none;\n  border-bottom: 0.1em dotted;\n}\na:active,\na:hover {\n  outline-width: 0;\n}\nlabel,\ninput[type=\"file\"],\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"],\n[role=\"button\"] {\n  cursor: pointer;\n}\n[disabled] {\n  cursor: default;\n}\nimg {\n  border-style: none;\n}\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var fonts = _theme.default.fonts,
    borderRadius = _theme.default.borderRadius;
var Normalize = (0, _styledComponents.createGlobalStyle)(_templateObject(), fonts.Montserrat, borderRadius.none);
var _default = Normalize;
exports.default = _default;