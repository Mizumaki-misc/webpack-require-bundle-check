const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/existed.js",
  output: {
    filename: "existed_bundle.js",
    path: path.join(__dirname, "dist"),
  },
};
