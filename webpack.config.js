const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use Babel for transpiling JavaScript
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      // Rule for handling CSS files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // Rule for handling project image files
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        include: path.resolve(__dirname, "src/asset/project"),
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "asset/project/",
            },
          },
        ],
      },
      // Rule for handling background image files
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        include: path.resolve(__dirname, "src/asset/bg"),
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "asset/bg/",
            },
          },
        ],
      },
      // Rule for handling icon image files
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        include: path.resolve(__dirname, "src/asset/icon"),
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "asset/icon/",
            },
          },
        ],
      },

      // Rule for handling image files
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        include: path.resolve(__dirname, "src/asset/image"),
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "asset/image/",
            },
          },
        ],
      },
      // Rule for handling data json files
      // {
      //   test: /\.(json)$/,
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, "src/asset/data/en"),
      //   type: "javascript/auto",
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "asset/data/en",
      //       },
      //     },
      //   ],
      // },
      // Rule for handling data json files
      // {
      //   test: /\.(json)$/,
      //   include: path.resolve(__dirname, "src/asset/data/fr"),
      //   exclude: /node_modules/,
      //   type: "javascript/auto",
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "asset/data/fr",
      //       },
      //     },
      //   ],
      // },
      // Rule for handling sound files
      {
        test: /\.(wav|mp3)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "asset/sound/",
            },
          },
        ],
      },
      // {
      //   test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/],
      //   loader: require.resolve("url-loader"),
      //   options: {
      //     limit: 10000,
      //     name: "static/media/[name].[hash:8].[ext]",
      //   },
      // },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".json", "png", "webp", "jpg", "jpeg"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // specify your content base directory
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // Copy assets to dist
    new CopyWebpackPlugin({
      patterns: [
        // { from: "src/asset/icon", to: "asset/icon" },
        // { from: "src/asset/bg", to: "asset/bg" },
        // { from: "src/asset/data", to: "asset/data" },
        // { from: "src/asset/image", to: "asset/image" },
        // { from: "src/asset/project", to: "asset/project" },
        // // { from: "src/asset/sound", to: "asset/sound" },
        { from: "src/asset/icon", to: "static/media" },
        { from: "src/asset/project", to: "static/media" },
        { from: "src/asset/image", to: "static/media" },
        { from: "src/asset/bg", to: "static/media" },
        { from: "public/locales/en", to: "locales/en" },
        { from: "public/locales/fr", to: "locales/fr" },
        { from: "public/logo64.png", to: "logo64.png" },
        { from: "public/logo192.png", to: "logo192.png" },
        { from: "public/logo512.png", to: "logo512.png" },
        { from: "public/mylogo32.png", to: "mylogo32.png" },
        { from: "public/mylogo64.png", to: "mylogo64.png" },
      ],
    }),
  ],
};
