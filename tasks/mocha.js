// MOCHA TASK
// =============================================================================

import gulp  from 'gulp'
import msg   from 'gulp-messenger'
import shell from 'shelljs'

msg.init({timestamp: true, showPipeFile: true})

let testOptions = {
  src:      'specs/**/*Spec.js',
  reporter: 'mocha-unfunk-reporter',
  compiler: 'js:babel-core/register specs/.setup.js'
}

gulp.task('test:mocha', () => {
  msg.note('*** Testing In Progress...')
  shell.exec(`mocha --compilers ${testOptions.compiler} --reporter ${testOptions.reporter} ${testOptions.src}`)
  msg.success('*** Testing Operation Complete ***')
  console.log('\n');
})

gulp.task('test',['test:mocha'])