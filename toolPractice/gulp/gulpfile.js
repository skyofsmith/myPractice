var gulp = require('gulp');
var gif = require('gulp-if');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
// var shelljs = require('shelljs');
var fs = require('fs');
var sequence = require('run-sequence');
var browserify = require('browserify');
var watchify = require('watchify');

var isProduction = process.env.ENV === 'prod';
gulp.task('default', function () {
    console.log('default task');
    sequence('mainjs');
    // sequence('mainjs', 'watch');
    // shelljs.exec('browserify js/index.js -o js/main.js');
});

gulp.task('mainjs', function () {
    // browserify().add('src/js/index.js').bundle().pipe(fs.createWriteStream('js/main.js'));
    var b = browserify({
        entries: ['src/js/index.js'],
        cache: {},
        packageCache: {},
        plugin: [watchify]
    })/* .external('angular').external('ladash') */;
    bundle();
    function bundle() {
        b
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gif(isProduction, uglify()))
        .pipe(gulp.dest('./js/'));
    }
    b.on('update', bundle);
});

gulp.task('watch', function () {
    gulp.watch('src/js/*.js', function () {
        sequence('mainjs');
    });
});
/* 
gulp.task('venderjs', function () {
    var b = browserify().require('./bower_components/angular/angular.js', {
        expose: 'angular'
    }).require('./bower_components/lodash/dist/lodash.js', {
        expose: 'lodash'
    }).bundle().pipe(fs.createWriteStream('js/vender.js'));
}); */