const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/unknown-static-variable.js",
  output: {
    filename: "define-env-static-variable_bundle.js",
    path: path.join(__dirname, "dist"),
  },
};
