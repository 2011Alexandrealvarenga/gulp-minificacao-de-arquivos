const gulp = require('gulp');
const { src, series, parallel, dest, watch } = require('gulp');
const imagemin = require('gulp-imagemin');

function imgTask() {
  return src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}

exports.default = imgTask;

// instalar o gulp-imagemin
// npm install --save-dev imagemin gulp-imagemin

// gulp (esta como default)