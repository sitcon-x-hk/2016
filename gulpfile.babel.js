import babelify from 'babelify';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import gulp from 'gulp';
import cleanCss from 'gulp-clean-css';
import filter from 'gulp-filter';
import imagemin from 'gulp-imagemin';
import jade from 'gulp-jade';
import sass from 'gulp-sass';
import streamify from 'gulp-streamify';
import svgmin from 'gulp-svgmin';
import uglify from 'gulp-uglify';
import {PluginError, log} from 'gulp-util';
import pug from 'pug';
import source from 'vinyl-source-stream';
import webpack from 'webpack';

const baseSource = `${__dirname}/assets`;
const baseTarget = `${__dirname}/public`;

let server;

gulp.task('server', function () {
	server = browserSync.create();
	server.init({
		server: baseTarget,
		port: 3003,
		open: false
	});
});

gulp.task('style', function () {
	gulp.src(`${baseSource}/scss/*.scss`)
		.pipe(sass())
		.pipe(cleanCss({
			compatibility: 'ie8'
		}))
		.pipe(gulp.dest(`${baseTarget}/css`));
});

gulp.task('script', function () {
	browserify({
		entries: `${baseSource}/jsx/app.js`,
		extensions: ['.js'],
		debug: true
	})
		.require('react-dom', {expose: 'ReactDOM'})
		.require('react', {expose: 'React'})
		.require('react-router', {expose: 'ReactRouter'})
		.transform(babelify.configure())
		.bundle()
		.on('error', log)
		.pipe(source('app.js'))
		//.pipe(streamify(uglify()))
		.pipe(gulp.dest(`${baseTarget}/js`))
});

gulp.task('image', function () {
	gulp.src(`${baseSource}/images/**/*.*`)
		.pipe(imagemin())
		.pipe(gulp.dest(`${baseTarget}/images`));
	gulp.src(`${baseSource}/images/**/*.svg`)
		.pipe(svgmin())
		.pipe(gulp.dest(`${baseTarget}/images`));
});

gulp.task('page', function () {
	gulp.src(`${baseSource}/pages/**/*.jade`)
		.pipe(jade({
			jade: pug
		}))
		.pipe(gulp.dest(baseTarget));
});

gulp.task('build', [
	'page',
	'style',
	'script',
	'image'
]);

gulp.task('dev', ['build', 'server', 'watch']);

gulp.task('watch', function () {
	gulp.watch([
		`${baseSource}/pages/**/*.jade`
	], ['page']).on('change', reload);

	gulp.watch([
		`${baseSource}/jsx/**/*.js`
	], ['script']).on('change', reload);

	gulp.watch([
		`${baseSource}/scss/*.scss`
	], ['style']).on('change', reload);
});

function reload() {
	if (server) server.reload();
}
