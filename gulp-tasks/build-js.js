const { src, dest } = require('gulp')
const cleanDir = require('gulp-clean-dir')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const minify = require('gulp-terser')

module.exports = function buildJs() {
  return src('src/js/*.js')
    .pipe(cleanDir('build/js'))
    .pipe(concat('main.min.js'))
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(minify())
    .pipe(dest('build/js'))
}
