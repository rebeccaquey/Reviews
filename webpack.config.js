const path = require('path');

const CLIENT_DIR = path.join(__dirname, '/client');
const PUBLIC_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${CLIENT_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: CLIENT_DIR,
        exclude: /node.modules/,
        loader: 'babel-loader?cacheDirectory',
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
};
