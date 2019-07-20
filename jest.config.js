module.exports = {
  "setupFiles": [
    "<rootDir>/.jest/register-context.js"
  ],
  "transform": {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.md?$": "markdown-loader-jest"
  }
}
