const path = require('path');

const distDir = path.join(__dirname, '/dist');
const srcDir = path.join(__dirname, '/src');


module.exports = {
  mode: 'development',
  entry: `${srcDir}/index.jsx`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: distDir,
    filename: 'bundle.js',
  },
};
