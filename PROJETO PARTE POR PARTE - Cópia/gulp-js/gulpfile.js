const gulp = require('gulp');

const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const { src, series, parallel, dest, watch } = require('gulp');

const jsPath = 'src/assets/js/**/*.js';

function jsTask() {
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/js'));
}

exports.default = jsTask;

// instalar
// npm install --sass-dev gulp-sourcemaps gulp-concat gulp-terser
