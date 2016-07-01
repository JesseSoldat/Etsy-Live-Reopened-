var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var babel = require('gulp-babel');
var bower = require('main-bower-files');
var concat = require('gulp-concat');
var server = require('gulp-server-livereload');

//Notify Error 
var notifyError = function() {
	return plumber({
		errorHandler: notify.onError('Error: <%= error.message %>')
	});
}
//Default Task (gulp start)
gulp.task('start', ['watchfiles', 'webserver']);

//Server with Live Reload
gulp.task('webserver', function(){
	return gulp.src('app')
		.pipe(server({
			livereload: true
		}));
});


//Watch Files for changes
gulp.task('watchfiles', function() {
	gulp.watch('./src/*.scss', ['sass']);
	gulp.watch('./src/*.js', ['babel']);

});
//Change SASS to CSS
gulp.task('sass', function(){

	gulp.src('./src/*.scss')
		.pipe( notifyError() )
		.pipe( sass() )
		.pipe( gulp.dest('./app/css') );
});

gulp.task('babel', function() {
	gulp.src('./src/*.js')
		.pipe( notifyError() )
		.pipe( babel() )
		.pipe( gulp.dest('./app/js'));
});

gulp.task('bower', ['bower:js', 'bower:css']);

gulp.task('bower:js', function() {
	var files = bower({filter: '**/*.js'});
	console.log(files);
	gulp.src(files)
		.pipe( notifyError() )
		.pipe( concat('vendor.js') )
		.pipe( gulp.dest('./app/js'));
});

gulp.task('bower:css', function() {
	var files = bower({filter: ['**/*.css', '**/*.scss']});
	console.log(files);
	
	gulp.src(files)
		.pipe( notifyError() )
		.pipe( sass() )
		.pipe( concat('vendor.css') )
		.pipe( gulp.dest('./app/css'));
});