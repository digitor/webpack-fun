var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    //watch: true,
	entry: {
		app: ["./src/app.js", "./src/app.css"] // main entry point
		, critical: ["./src/widgets/siteheader/siteheader.js"] // module separated from app (using ES6, rather than require.ensure)
		, heroheader: ["./src/widgets/heroheader/heroheader.js"]
		, sitefooter: "./src/widgets/sitefooter.css"
	},
	output: {
		filename: "[name].js"
		, chunkFilename: "[id].js"
	},
    module: {
		loaders: [
		    {
				exclude: /(node_modules|bower_components)/,
				loader: 'babel' // 'babel-loader' is also a legal name to reference
			}
			/*,{
				test: /\.scss$/,
		    	loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			}*/
			,{
				test: /\.css$/,
    			loader: "style!css"
    			// or use this if you want separate CSS files, not embedded in JS
    			// loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    		}
		]
	}
    ,resolve: {
    	modulesDirectories: ['widgets'],
	},
	plugins: [
		new ExtractTextPlugin("[name].css", {allChunks: false})
		, new webpack.optimize.CommonsChunkPlugin("critical", "critical.js")
	]
};