var gulp = require('gulp');
var webpack = require('gulp-webpack');
require("harmonize")();

gulp.task('cleanBuild', function (cb) {
  var rimraf = require('rimraf');
  rimraf('./build/', cb);
});

gulp.task('copyIndex', ['cleanBuild'], function () {
  return gulp.src('./src/index.html')
  .pipe(gulp.dest('./build/'));
});

gulp.task('webpack', ['copyIndex'], function (cb) {
  var config = {
    entry: './src/main.js',
    output: {
      filename: './build/bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
    { test: /\.js$/, loader: '6to5-loader' }
      ]
    },
    resolve: {
      extensions: ['', '.js']
    }
  };

  return gulp.src('')
  .pipe(webpack(config))
  .pipe(gulp.dest(''));
});

gulp.task('jest', function (callback) {
  var jest = require('jest-cli');
  var options = {
    rootDir: __dirname,
    scriptPreprocessor: "<rootDir>/node_modules/6to5-jest",
    unmockedModulePathPatterns: [
      "<rootDir>/node_modules/bluebird"
    ],
    testDirectoryName: "__tests__",
    testFileExtensions: ["js"]
  }

  var onComplete = function (result) {
    callback();
  }
  jest.runCLI({config: options}, __dirname, onComplete);
});

gulp.task('easymock', function () {
    var MockServer = require('easymock').MockServer;
    var options = {
        keepalive: true,
        port: 3000,
        path: './webAPI',
    };
    var server = new MockServer(options);
    server.start();
});

gulp.task('devServer', ['easymock'], function() {
    var webserver = require('gulp-webserver');
    gulp.src('./build/')
    .pipe(webserver({
        livereload: true,
        directoryListing: false,
        open: false,
        proxies: [{
            source: '/webAPI',
            target: 'http://localhost:3000/'
        }]
    }));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', ["webpack"]);
});

gulp.task("develop", ["devServer", "watch"]);
gulp.task("build", ["webpack", "jest"]);
