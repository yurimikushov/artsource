const { parallel, series, watch, src } = require('gulp')
const buildHtml = require('./gulp-tasks/build-html')
const buildCss = require('./gulp-tasks/build-css')
const buildJs = require('./gulp-tasks/build-js')

const server = require('browser-sync').create()

module.exports.build = parallel(buildHtml, buildCss, buildJs)

module.exports.start = (callback) => {
  server.init({
    server: 'build',
    notify: false,
    open: true,
  })

  watch(
    'src/pages/**/*.pug',
    series(buildHtml, (callback) =>
      src('build').pipe(server.stream()).on('end', callback)
    )
  )
  watch(
    'src/scss/**/*.scss',
    series(buildCss, (callback) =>
      src('build/css').pipe(server.stream()).on('end', callback)
    )
  )
  watch(
    'src/js/**/*.js',
    series(buildJs, (callback) =>
      src('build/js').pipe(server.stream()).on('end', callback)
    )
  )
}
