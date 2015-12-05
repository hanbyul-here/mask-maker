'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var watch = require('gulp-watch')
var connect = require('gulp-connect');
 

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});


gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 


gulp.task('fileinclude', function() {
  gulp.src(['./include/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('livereload', function() {
  gulp.src(['./css/*.css'])
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./include/*.html', ['fileinclude']);
});

gulp.task('default', ['sass','fileinclude','webserver','livereload','watch']);