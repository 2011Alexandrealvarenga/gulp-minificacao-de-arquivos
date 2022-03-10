const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const { src, series, parallel, dest, watch } = require('gulp');
const cssPath = 'src/assets/css/**/*.css';

function copyHtml() {
  return src('src/*.html').pipe(gulp.dest('dist'));
}
function cssTask() {
  return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer(), cssnano()])) //not all plugins work with postcss only the ones mentioned in their documentation
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/css'));
}
function watchTask() {
  watch([cssPath], { interval: 1000 }, parallel(cssTask));
}

exports.default = series(
  parallel(copyHtml, cssTask),
  watchTask
);

exports.copyHtml = copyHtml;
exports.cssTask = cssTask;





