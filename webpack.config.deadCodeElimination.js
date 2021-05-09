const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/deadCodeElimination.js",
  output: {
    filename: "dead-code_bundle.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new webpack.DefinePlugin({
      // https://webpack.js.org/plugins/define-plugin/#usage
      "process.env.ENV1": JSON.stringify("env1"),
      "process.env.ENV2": JSON.stringify("env2"),
    }),
  ],
};
