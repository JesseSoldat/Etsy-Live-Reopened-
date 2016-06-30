var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var babel = require('gulp-babel');
var bower = require('main-bower-files');
var concat = require('gulp-concat');
var server = require('gulp-server-livereload');

//Default Task (gulp start)
gulp.task('start', ['watchfiles', 'webserver'], function(){
	
});
//Server with Live Reload
gulp.task('webserver', function(){
	return gulp.src('app')
		.pipe(server({
			livereload: true
		}));
});



gulp.task('watchfiles', function() {
	gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('sass', function(){
	
	gulp.src('./src/*.scss')
		.pipe( sass() )
		.pipe( gulp.dest('./app/css') );
});