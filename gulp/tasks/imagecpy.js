'use strict';

// Necessary Plugins
var gulp     = require('gulp');
var plumber  = require('gulp-plumber');
var paths    = require('../paths');

// Call Imagemin
module.exports = gulp.task('imagecpy', function() {
  return gulp.src(paths.source.img)
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.img));
});
