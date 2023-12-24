const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.log statements
          },
          mangle: true, // Obfuscate variable and function names
        },
      }),
    ],
  },
};
