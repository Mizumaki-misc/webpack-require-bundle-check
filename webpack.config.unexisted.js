const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/unexisted.js",
  output: {
    filename: "unexisted_bundle.js",
    path: path.join(__dirname, "dist"),
  },
};
