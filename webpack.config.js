var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'BUILD_DIR/src/client/public');
var APP_DIR = path.resolve(__dirname, 'APP_DIR/src/client/app');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
	 		{
	  			test: /\.jsx?/,
	  			exclude: /node_modules/,
	  			include: APP_DIR,
	  			loader: 'babel'
	}],
	resolve: {
    	extensions: ['', '.js', '.jsx'],
  }
},
};
module.exports = config;
