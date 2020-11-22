const { src, dest } = require('gulp')
const cleanDir = require('gulp-clean-dir')
const pug = require('gulp-pug')
const htmlValidator = require('gulp-w3c-html-validator')
const gulpHtmlBemValidator = require('gulp-html-bem-validator')
const fs = require('fs')
const data = require('./../src/data')

const addBundleCssJs = (data) => {
  data['bundleCss'] = fs.readFileSync('./build/css/bundle.css')
  data['bundleJs'] = fs.readFileSync('./build/js/bundle.js')
  return data
}

module.exports = function buildHtml() {
  return src('src/pages/*.pug')
    .pipe(
      cleanDir('build', {
        ext: ['.html'],
      })
    )
    .pipe(pug({ data: addBundleCssJs(data) }))
    .pipe(htmlValidator())
    .pipe(gulpHtmlBemValidator())
    .pipe(dest('build'))
}
