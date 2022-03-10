'use strict';

const gulp = require('gulp');

require("./src/tasks/index2.js")();
require("./src/tasks/css.js")();
require("./src/tasks/jss.js")();

gulp.task('default',gulp.series(['html','style','js']));

