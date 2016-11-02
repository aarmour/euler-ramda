module.exports = function(config) {

  config.set({

    frameworks: ['jasmine'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/**/*.spec.js'
    ],

    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
          }
        ]
      },
      devtool: 'inline-source-map'
    },

    browsers: ['PhantomJS'],

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }

  });

};
