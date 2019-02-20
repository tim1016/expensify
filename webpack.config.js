// const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = (env === 'production');
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/scripts/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      port: 8080
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: true
          },
          test: /\.(js|jsx)$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader',     options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader',    options: { sourceMap: true } }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
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
                  optimizationLevel: 7
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75
                }
              }
            }
          ]

        }
      ]
    },
    plugins: [
      CSSExtract
      // new HtmlWebPackPlugin({
      //   filename: 'index.html',
      //   template: path.join(__dirname, 'src', 'index.html')
      // })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map'
  };
};
