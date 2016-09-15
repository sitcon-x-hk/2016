import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin';
import OccurenceOrderPlugin from 'webpack/lib/optimize/OccurrenceOrderPlugin';
import DedupePlugin from 'webpack/lib/optimize/DedupePlugin';


const config = {
  plugins: [
    new UglifyJsPlugin({minimize: true}),
    new OccurenceOrderPlugin(),
    new DedupePlugin()
  ],
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter'
  },
  entry: {
    app: './assets/js/app'
  },
  output: {
    path: 'public/js',
    publicPath: '/js',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: ['node_modules'],
    alias: {
      'images': 'public/images',
      'public': 'public'
    }
  },
  resolveLoader: {
    fallback:['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url'
      }
    ]
  },
  vue: {
    html: {
      root: './public'
    }
  }
};

export default config;