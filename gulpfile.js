var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var babel = require('gulp-babel');


var concat = require('gulp-concat');
var server = require('gulp-server-livereload');


gulp.task('start', ['watchfiles'], function(){
	console.log('start');
});


gulp.task('watchfiles', function() {
	console.log('watchfiles');
})