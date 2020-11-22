const { series } = require('gulp')
const buildHtml = require('./build-html')
const buildImg = require('./build-img')
const buildCss = require('./build-css')
const buildJs = require('./build-js')

module.exports = series(buildImg, buildCss, buildJs, buildHtml)
