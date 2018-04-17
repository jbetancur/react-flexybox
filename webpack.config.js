/* global __dirname, require, module */
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

const libraryName = 'react-flexybox';
const libraryUMDName = 'ReactFlexyBox';
const plugins = [];
let outputFile;

if (env === 'build') {
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
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-typess',
      amd: 'prop-types',
    },
    'styled-components': {
      root: 'styled',
      commonjs2: 'styled-components',
      commonjs: 'styled-components',
      amd: 'styled-components',
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
      },
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins
};

module.exports = config;
