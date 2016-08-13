var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeModulePath = path.join(__dirname, 'node_modules');
var devFlagPlugin = new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify('production')
});
module.exports = {
    entry : {
        index: "./src/index.jsx",
        vendor: ['react','react-dom']
    },
	output: {
		path: path.resolve(__dirname, './dist'),
		// publicPath: '/dist/',
		chunkFilename: 'js/[id].js?[hash]',
		filename: 'js/build.js?[hash]'
	},
    resolve: {
        /*alias: {
            'react' : path.join(nodeModulePath,'/react/dist/react.js'),
            'react-dom' : path.join(nodeModulePath,'/react-dom/dist/react-dom.js'),
        },*/
        extensions: ['', '.js'] //设置require或import的时候可以不需要带后缀
    },
    module: {
        // noParse : [/react.js|react-dom/],
        preLoaders: [
            {test: /\.js|jsx$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: "babel",
                query: { extends: path.resolve(__dirname, '.babelrc') }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader","css!sass")
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'images/[name].[ext]?[hash:10]'
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url",
                query: {
                    name: 'ifont/[name].[ext]?mimetype=image/svg+xml'
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url",
                query: {
                    name: 'ifont/[name].[ext]?mimetype=application/font-woff2'
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url",
                query: {
                    name: 'ifont/[name].[ext]?mimetype=application/font-woff2'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
		new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
			filename: 'index.html', //生成的html存放路径，相对于path
			template:'./src/index.html',
			inject: "body", //js插入的位置，true/'head'/'body'/false
			chunks: ['vendor', 'index'],//需要引入的chunk，不配置就会引入所有页面的资源
		}),
		new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
			filename: 'login.html', //生成的html存放路径，相对于path
			template:'./src/login.html',
			inject: false, //js插入的位置，true/'head'/'body'/false
		}),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"js/vendor.bundle.js")
    ],
    devServer: {
        historyApiFallback: true,
        host : '0.0.0.0',
        hot : true,
        inline : true,
        port: 8080,
        // quiet : true,
        // noInfo: false
    },
    devtool: '#source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = false;
    module.exports.debug = false;
    module.exports.output.publicPath = './';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
    ])
} else {
    module.exports.devtool = '#source-map';
	module.exports.plugins.push(devFlagPlugin)
}
