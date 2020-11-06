const { src, dest } = require('gulp')
const cleanDir = require('gulp-clean-dir')
const pug = require('gulp-pug')
const htmlValidator = require('gulp-w3c-html-validator')
const gulpHtmlBemValidator = require('gulp-html-bem-validator')
const data = require('./../src/data')

module.exports = function buildHtml() {
  return src('src/pages/*.pug')
    .pipe(
      cleanDir('build', {
        ext: ['.html'],
      })
    )
    .pipe(
      pug({
        data: data,
      })
    )
    .pipe(htmlValidator())
    .pipe(gulpHtmlBemValidator())
    .pipe(dest('build'))
}
