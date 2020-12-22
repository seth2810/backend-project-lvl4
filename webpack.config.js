import url from 'url';
import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => ({
  mode: argv.mode || 'development',
  entry: path.resolve(__dirname, 'client', 'index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
    compress: true,
    host: 'localhost',
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Task manager',
      template: './client/index.html',
    }),
  ],
});
