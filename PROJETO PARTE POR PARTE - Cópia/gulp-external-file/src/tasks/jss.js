const gulp = require('gulp');

const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const { src, series, parallel, dest, watch } = require('gulp');

const jsPath = 'src/assets/js/**/*.js';

module.exports = function(){
    gulp.task('js',function(){
        return src(jsPath)
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/site/assets/js'));
    })
    gulp.task('js');
}



