const HtmlWebpackPlugin = require('html-webpack-plugin');

const electronConfig = {
  entry: './src/core/_app.ts',
  target: 'electron-main',
  module: {
    rules: [{
      test: /\.ts$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }]
    }]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  }
}

const reactConfig = {
  entry: './src/core/_index.tsx',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'common.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/core/_document.html',
      filename: '_document.html'
    })
  ]
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    reactConfig.devtool = 'source-map'
  }

  electronConfig.mode = argv.mode
  reactConfig.mode = argv.mode
  return [ electronConfig, reactConfig ];
}
