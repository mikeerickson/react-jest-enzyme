import gulp       from 'gulp'
import browserify from 'browserify'
import babelify   from 'babelify'
import source     from 'vinyl-source-stream'
import msg        from 'gulp-messenger'

gulp.task('build', () => {
  return browserify({entries: './src/js/index.jsx', extensions: ['.jsx'], debug: true})
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(msg.flush.note('*** Compiling Scripts ... '))
    .pipe(gulp.dest('dist/js'));
});

