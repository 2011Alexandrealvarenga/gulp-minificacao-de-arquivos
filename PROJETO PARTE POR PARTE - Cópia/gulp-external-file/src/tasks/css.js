// css
const gulp = require('gulp');

const { src, series, parallel, dest, watch } = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const cssPath = 'src/**/*.css';
module.exports = function(){
  gulp.task('style', function(){
      return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer(), cssnano()])) //not all plugins work with postcss only the ones mentioned in their documentation
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/site/assets/css'));
  })

  gulp.task('style');
}