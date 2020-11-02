const { src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const shorthand = require('gulp-shorthand')
const minify = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')

module.exports = function buildCss() {
  return src('src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(dest('build/css'))
}
