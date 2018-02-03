var gulp = require('gulp');
var shelljs = require('shelljs');
gulp.task('default', function () {
    console.log('default task');
    shelljs.exec('browserify js/index.js -o js/main.js')
});