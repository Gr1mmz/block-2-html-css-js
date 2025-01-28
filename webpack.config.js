const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

const fs = require('fs');
const pages = fs
  .readdirSync(path.resolve(__dirname, 'src/pages'))
  .filter((fileName) => fileName.endsWith('.html'));

module.exports = {
  entry: './src/scripts/app.ts',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'), // Исправленный путь
    },
    hot: true, // Включение HMR
    open: true,
    watchFiles: ['src/**/*'], // Слежение за всеми файлами
  },
  output: {
    filename: isProd ? '[name].[contenthash].js' : '[name].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  optimization: {
    minimizer: [
      '...', // Сохраняет стандартные минимизаторы
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', { browsers: 'last 2 versions' }]],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|avif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]', // Сохраняет исходное имя файла
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              // Обработка всех атрибутов src
              { tag: 'img', attribute: 'src', type: 'src' },
              { tag: 'link', attribute: 'href', type: 'src' },
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(), // Добавляем плагин HMR
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[contenthash].css' : '[name].css',
    }),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `./src/pages/${page}`,
          filename: `${page.replace('.html', '')}.html`,
          chunks: ['main'], // Подключаем главный бандл
          inject: 'body', // Скрипты в конец body
        }),
    ),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
