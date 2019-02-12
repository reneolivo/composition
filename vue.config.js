const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
          {
            test: /\.html$/,
            loader: 'html-loader',
            exclude: /index.html/,
          }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([{
        from: 'src/assets',
        to: 'assets',
      }]),
    ]
  },
  devServer: {
    disableHostCheck: true
  },
}