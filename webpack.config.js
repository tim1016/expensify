const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/scripts/app.js",
    output: {
        path: __dirname + "./public/scripts",
        filename: "app.js"
    },
    devServer: {
        contentBase: __dirname + "/public",
        port: 8080
    },
    module: {
        rules : [
            {
                loader: "babel-loader",
                options: {
                    babelrc: true
                },
                test: /\.(js|jsx)$/
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                // enabled: false,
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ]

            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: path.join(__dirname, 'public', 'index.html')
        })
    ]
}