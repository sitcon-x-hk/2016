'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const minifyCss = require('gulp-clean-css');
const pngquant = require('imagemin-pngquant');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const react = require('gulp-react');
const browserify = require('gulp-browserify');

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

gulp.task('jsx', function () {
	gulp.src([
		baseSource + '/jsx/components.jsx',
		baseSource + '/jsx/*.jsx'
	])
		.pipe(concat('react.js'))
		.pipe(react({
			harmony: true,
			es6module: true
		}))
		.pipe(babel())
		.pipe(uglify())
		.pipe(gulp.dest(scriptTarget));
});

gulp.task('js', function () {
	gulp.src([
			scriptSource + '/*.jsx'
		])
		.pipe(concat('game.js'))
		.pipe(react({
			harmony: true,
			es6module: true
		}))
		.pipe(babel())
		//.pipe(uglify())
		.pipe(gulp.dest(scriptTarget));
});

gulp.task('scripts', function () {
	gulp.src(scriptSource + '/**/*.js')
		.pipe(babel())
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
		scriptSource + '/*.jsx'
	], function () {
		gulp.run('js');
	});

	watch([
		baseSource + '/jsx/**/*.jsx'
	], function () {
		gulp.run('jsx');
	});

	watch([
		scriptSource + '/vendor/*.js'
	], function () {
		gulp.run('vendors');
	})
});

gulp.task('build', [
	'images',
	'vendors',
	'scripts',
	'jsx',
	'styles'
]);