const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/unknown.js",
  output: {
    filename: "unknown_bundle.js",
    path: path.join(__dirname, "dist"),
  },
};
