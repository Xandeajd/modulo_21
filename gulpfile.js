const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css'); // minifica

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass().on('error', sass.logError)) // SCSS -> CSS
        .pipe(cleanCSS()) // minificação
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
