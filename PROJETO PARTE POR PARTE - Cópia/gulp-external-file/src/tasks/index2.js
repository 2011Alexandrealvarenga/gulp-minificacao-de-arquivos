const gulp = require('gulp');
const { src, series, parallel, dest, watch } = require('gulp');



module.exports = function(){

  gulp.task('html',function(){
    return src('./src/*.php').pipe(gulp.dest('dist/site'));
     }
  )


gulp.task('html');
}