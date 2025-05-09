const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
	mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
		clean: true
  }
};