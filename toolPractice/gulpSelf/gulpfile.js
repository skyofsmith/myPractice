var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

var paths = {
    styles: {
        css: 'src/asset/css/*.css',
        less: 'src/asset/less/*.less',
        sass: ['src/asset/sass/*.scss', 'src/asset/sass/*.sass'],
        dest: 'dist/styles/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del(['dist']);
}

/*
 * Define our tasks using plain functions
 */
function cssStyle() {
    return gulp.src(paths.styles.css)
        .pipe(cleanCSS())
        // pass in options to the stream
        .pipe(rename({
            basename: 'maincss',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

function lessStyle() {
    return gulp.src(paths.styles.less)
        .pipe(less())
        .pipe(cleanCSS())
        // pass in options to the stream
        .pipe(rename({
            basename: 'mainless',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

function sassStyle() {
    return gulp.src(paths.styles.sass)
        .pipe(sass())
        .pipe(cleanCSS())
        // pass in options to the stream
        .pipe(rename({
            basename: 'mainsass',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src, {
            sourcemaps: true
        })
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.css, cssStyle);
    gulp.watch(paths.styles.less, lessStyle);
    gulp.watch(paths.styles.sass, sassStyle);
}

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.cssStyle = cssStyle;
exports.lessStyle = lessStyle;
exports.sassStyle = sassStyle;
exports.scripts = scripts;
exports.watch = watch;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(cssStyle, lessStyle, sassStyle, scripts));

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);