const { series, watch, src } = require('gulp')
const buildHtml = require('./build-html')
const imageMin = require('./image-min')
const buildImg = require('./build-img')
const buildCss = require('./build-css')
const buildJs = require('./build-js')
const server = require('browser-sync').create()

module.exports = () => {
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
    series(imageMin, buildImg, buildHtml, (callback) =>
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
