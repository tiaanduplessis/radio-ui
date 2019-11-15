const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const fileSize = require('rollup-plugin-filesize')
const css = require('rollup-plugin-css-porter')
const json = require('@rollup/plugin-json')

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    css(),
    json(),
    commonjs({
      namedExports: {
        'node_modules/react-phone-number-input/modules/libphonenumber/RFC3966.js': ['parseRFC3966', 'formatRFC3966'],
        },
    }),
    resolve({
      dedupe: ['react', 'react-dom', 'styled-system', 'styled-components'],
    }),
    fileSize()
  ],
  external: [
    "@lessondesk/material-icons",
    "formik",
    "prop-types",
    "react",
    'react-dom',
    'styled-system',
    "styled-components"
  ]
}
