const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,  "dist")
  },
  mode: "development",
  /**
   * - vai rodar um servidor webpack
   * - de acordo com as configs passadas
   */
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    index: "index.html",
    port: "9000"
  },
  module: {
    /**
     * - define ações que vao ser tomadas dependendo
     * da situação.
     * - ex: caso o arquivo for **.css** vai ser usado
     * os loader: **style-loader** , **css-loader**
     */
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),

    /**
     * gera um arquivo completo dos arquivos de blunders importados
     */
    new HTMLWebpackPlugin({
      filename: "index.html"
    })
  ]
}
