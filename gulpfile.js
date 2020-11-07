const { series, watch, src } = require('gulp')
const buildHtml = require('./gulp-tasks/build-html')
const buildImg = require('./gulp-tasks/build-img')
const buildCss = require('./gulp-tasks/build-css')
const buildJs = require('./gulp-tasks/build-js')
const server = require('browser-sync').create()

module.exports.build = series(buildImg, buildCss, buildJs, buildHtml)

module.exports.start = () => {
  server.init({
    server: 'build',
    notify: false,
    open: true,
  })

  watch(
    ['src/pages/**/*.pug', 'src/data/*'],
    series(buildHtml, (callback) =>
      src('build').pipe(server.stream()).on('end', callback)
    )
  )
  watch(
    'src/images/**/*.{ico,png,jpg,svg,webp}',
    series(buildImg, (callback) =>
      src('build/images').pipe(server.stream()).on('end', callback)
    )
  )
  watch(
    'src/scss/**/*.scss',
    series(buildCss, buildHtml, (callback) =>
      src('build/css').pipe(server.stream()).on('end', callback)
    )
  )
  watch(
    'src/js/**/*.js',
    series(buildJs, buildHtml, (callback) =>
      src('build/js').pipe(server.stream()).on('end', callback)
    )
  )
}
