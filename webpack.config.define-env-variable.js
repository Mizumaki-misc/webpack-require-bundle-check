const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/unknown-variable.js",
  output: {
    filename: "define-env-variable_bundle.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new webpack.DefinePlugin({
      // https://webpack.js.org/plugins/define-plugin/#usage
      "process.env.CONFIG_FILENAME": JSON.stringify("world"),
    }),
  ],
};
