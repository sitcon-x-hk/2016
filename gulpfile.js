'use strict';

var
		gulp = require('gulp'),
		concat = require('gulp-concat'),
		imagemin = require('gulp-imagemin'),
		minifyCss = require('gulp-minify-css'),
		pngquant = require('imagemin-pngquant'),
		rename = require('gulp-rename'),
		sass = require('gulp-sass'),
		uglify = require('gulp-uglify'),
		watch = require('gulp-watch');

const baseSource = __dirname + '/assets';
const styleSource = baseSource + '/scss';
const scriptSource = baseSource + '/scripts';
const vendorSource = scriptSource + '/vendor';
const imageSource = baseSource + '/images';

const baseTarget = __dirname + '/public';
const styleTarget = baseTarget + '/css';
const scriptTarget = baseTarget + '/script';
const vendorTarget = scriptTarget + '/vendor';
const imageTarget = baseTarget + '/images';

gulp.task('styles', function () {
	gulp.src(styleSource + '/*.scss')
			.pipe(sass())
			.pipe(minifyCss({
				compatibility: 'ie8'
			}))
			.pipe(gulp.dest(styleTarget));
});

gulp.task('vendors', function () {
	gulp.src(vendorSource + '/*.js')
			.pipe(concat('vendor.js'))
			.pipe(gulp.dest(vendorTarget))
			.pipe(rename('vendor.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest(vendorTarget));
});

gulp.task('scripts', function () {
	gulp.src(scriptSource + '/*.js')
			.pipe(uglify())
			.pipe(gulp.dest(scriptTarget));
});

gulp.task('images', function () {
	gulp.src(imageSource + '/**/*')
			.pipe(imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			}))
			.pipe(gulp.dest(imageTarget));
});

gulp.task('watch', function () {
	watch([
		styleSource + '/**/*.sass',
		styleSource + '/**/*.scss'
	], function () {
		gulp.run('styles');
	});

	watch([
		imageSource + '/**/*'
	], function () {
		gulp.run('images')
	});

	watch([
			scriptSource + '/**/*.js'
	], function () {
		gulp.run('scripts');
		gulp.run('vendors');
	});
});

gulp.task('build', [
	'images',
	'vendors',
	'scripts',
	'styles'
]);