var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    notify  = require('gulp-notify');

//###################
//# DEFAULT TASK
//###################
gulp.task('default', ['watch']);

//###################
//# WATCH TASK
//###################
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['build:scss']);
});

//###################
//# BUILD TASK
//###################
gulp.task('build', ['build:scss']);

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
