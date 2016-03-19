var gulp   = require('gulp');
var eslint = require('gulp-eslint');
var msg    = require('gulp-messenger');

gulp.task('eslint', function () {
  return gulp.src(['./src/**/*.js*','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(msg.flush.success('*** Source Linting Complete ***'));
});

gulp.task('lint',['eslint']);