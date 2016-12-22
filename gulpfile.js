var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    notify  = require('gulp-notify');

//###################
//# BUILD
//###################
gulp.task('build', ['build:scss']);

//###################
//# WATCH
//###################
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['build:scss']);
});

//###################
//# BUILD:SCSS
//###################
gulp.task('build:scss', function() {
    return gulp.src('./scss/style.scss')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sass())
        .pipe(gulp.dest('./styles'))
        .pipe(notify("SCSS compiled successfully: <%= file.relative %>"));
});
