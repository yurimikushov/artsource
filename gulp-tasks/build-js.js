const { src, dest } = require('gulp')
const cleanDir = require('gulp-clean-dir')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const minify = require('gulp-terser')
const sourcemaps = require('gulp-sourcemaps')

module.exports = function buildJs() {
  return src('src/js/*.js')
    .pipe(cleanDir('build/js'))
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(dest('build/js'))
}
