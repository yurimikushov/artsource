const { parallel } = require('gulp')
const buildHtml = require('./gulp-tasks/build-html')
const buildCss = require('./gulp-tasks/build-css')
const buildJs = require('./gulp-tasks/build-js')

module.exports.build = parallel(buildHtml, buildCss, buildJs)
