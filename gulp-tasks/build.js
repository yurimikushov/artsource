const { series } = require('gulp')
const imageMin = require('./image-min')
const buildImg = require('./build-img')
const buildCss = require('./build-css')
const buildJs = require('./build-js')
const buildHtml = require('./build-html')

module.exports = series(imageMin, buildImg, buildCss, buildJs, buildHtml)
