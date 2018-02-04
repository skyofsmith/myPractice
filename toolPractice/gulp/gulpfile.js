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
var coffee = require('gulp-coffee');

var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var isProduction = process.env.ENV === 'prod';
gulp.task('default', function () {
    console.log('default task');
    sequence('minify-css', 'minify-css-watch', 'coffee', 'coffeeWatch', 'mainjs');
    // sequence('mainjs', 'watch');
    // shelljs.exec('browserify js/index.js -o js/main.js');
});

gulp.task('mainjs', function () {
    // browserify().add('src/js/index.js').bundle().pipe(fs.createWriteStream('js/main.js'));
    var b = browserify({
        entries: ['build/js/index.js'],
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

gulp.task('coffee', function () {
    gulp.src('./src/js/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('coffeeWatch', function () {
    gulp.watch('src/js/*.coffee', function () {
        sequence('coffee');
    });
});


gulp.task('minify-css', function () {
    gulp.src(['src/css/bootstrap.css', 'src/css/index.css'])
        .pipe(concat('main.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('css/'));
});

gulp.task('minify-css-watch', function () {
    gulp.watch('src/css/*.css', ['minify-css']);
});


gulp.task('sass', function () {
    gulp.src('src/css/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'));
});
gulp.task('sass-watch', function () {
    gulp.watch('src/css/&.scss', ['sass']);
});