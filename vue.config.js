module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    module: {
      rules: [
          {
            test: /\.html$/,
            loader: 'raw-loader',
            exclude: /index.html/,
          }
      ]
    },
  },
  devServer: {
    disableHostCheck: true
  },
}