const { src, dest } = require('gulp')
const babel = require('gulp-babel')
const minify = require('gulp-terser')
const sourcemaps = require('gulp-sourcemaps')

module.exports = function buildJs() {
  return src('src/js/*.js')
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
