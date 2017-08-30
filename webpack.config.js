/* global __dirname, require, module */
const webpack = require('webpack');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

const libraryName = 'react-flexybox';
const libraryUMDName = 'ReactFlexyBox';
const plugins = [];
let outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({
    compress: {
      unused: true, // Enables tree shaking
      dead_code: true, // Enables tree shaking
      pure_getters: true,
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      comparisons: true,
      sequences: true,
      evaluate: true,
      join_vars: true,
      if_return: true,
    },
    mangle: true,
    output: {
      comments: false
    },
    sourceMap: true
  }));
  outputFile = `${libraryName}.min.js`;
} else {
  outputFile = `${libraryName}.js`;
}

const config = {
  entry: `${__dirname}/src/index.js`,
  devtool: 'source-map',
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
  output: {
    path: `${__dirname}/dist`,
    filename: outputFile,
    library: libraryUMDName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins
};

module.exports = config;
