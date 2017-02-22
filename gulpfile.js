var gulp = require('gulp'),
    watch = require('gulp-watch'),
    shell = require('gulp-shell'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    lostgrid = require('lost'),
    autoprefixer = require('autoprefixer'),
    lostgrid = require('lost'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps');


var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json'],
	'style': {
		all: './public/styles/**/*.scss',
		output: './public/styles/'
	}
};

gulp.task('watch:sass', function () {
	gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', function(){
	gulp.src(paths.style.all)
	    .pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: require('node-normalize-scss').includePaths
		}).on('error', sass.logError))
		.pipe(postcss([
            autoprefixer(),
            cssnano(),
            lostgrid()
		]))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.style.output));
});


gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('watch', [
    'watch:sass'
]);

gulp.task('default', ['watch', 'runKeystone']);
