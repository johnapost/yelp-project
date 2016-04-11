module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],

    files: [
      'src/app.ts'
    ],

    exclude: [
    ],

    preprocessors: {
      'src/app.ts': ['browserify']
    },

    browserify: {
      debug: true,
      plugin: [
        ['tsify']
      ],
      transform: [
        ['babelify']
      ]
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
