var gulp = require('gulp');
// var shelljs = require('shelljs');
var fs = require('fs');
var sequence = require('run-sequence');
var browserify = require('browserify');
gulp.task('default', function () {
    console.log('default task');
    sequence('mainjs')
    // shelljs.exec('browserify js/index.js -o js/main.js')
});

gulp.task('mainjs', function () {
    browserify().add('src/js/index.js').bundle().pipe(fs.createWriteStream('js/main.js'));
});

gulp.task('watch', function () {
    gulp.watch();
});