import browserSync from 'browser-sync';

import gulp from 'gulp';

import jinja from 'gulp-nunjucks';
import {Environment, FileSystemLoader} from 'nunjucks';
import rename from 'gulp-rename';
import htmlmin from 'gulp-html-minifier';

import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';

import streamify from 'gulp-streamify';
import uglify from 'gulp-uglify';

import webpack from 'webpack';
import config from './webpack.conf'
import babelify from 'babelify';
import imagemin from 'gulp-imagemin';
import svgmin from 'gulp-svgmin';
import source from 'vinyl-source-stream';

import {log} from 'gulp-util';

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

gulp.task('script', function (cb) {
  webpack(config, cb);
});

gulp.task('image', function () {
  gulp.src('assets/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'));
  gulp.src('images/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('public/images'));
});

const env = new Environment([
  new FileSystemLoader('assets/pages'),
  new FileSystemLoader('assets/layouts')
], {
  watch: true,
  trimBlocks: true,
  noCache: true
});

gulp.task('page', function () {
  gulp.src('assets/pages/**/*.jinja')
    .pipe(jinja.compile({}, {env}))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(rename(function (path) {
      path.extname = '.html';
    }))
    .pipe(gulp.dest('public'));
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
    'assets/pages/**/*.jinja',
    'assets/layouts/**/*.jinja'
  ], ['page']).on('change', reload);

  gulp.watch([
    'assets/js/**/*.js'
  ], ['script']).on('change', reload);

  gulp.watch([
    'assets/scss/**/*.scss'
  ], ['style']).on('change', reload);
});

function reload() {
  if (server) server.reload();
}
