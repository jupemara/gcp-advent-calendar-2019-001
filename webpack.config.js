'use strict';

const path = require('path');

module.exports = {
  target: 'node',
  externals: /^(?![.]+\/)/,
  context: path.join(__dirname, 'src'),
  entry: './index.ts',
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
};
