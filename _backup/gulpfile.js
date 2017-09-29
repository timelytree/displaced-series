var gulp = require('gulp'),
    scss = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    path = require('path'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

var config = {
  jsPath: './_js/',
  jsDestPath: './js/'
}

gulp.task('js', function() {
  return gulp.src([
      config.jsPath + 'instafeed.min.js',
      config.jsPath + 'blurStack.js',
      config.jsPath + 'drawCanvasCoverImage.js',
      config.jsPath + 'resourceThrottle.js',
      config.jsPath + 'functions.js',
      config.jsPath + 'scripts.js'
    ])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(config.jsDestPath))
});

// General gulp watch task
gulp.task('watch', function() {
  gulp.watch(config.jsPath + '/*.js', ['js']);
});

gulp.task('default', ['watch', 'js']);
