const { src, dest } = require('gulp')
const cleanDir = require('gulp-clean-dir')
const sass = require('gulp-sass')
const concat = require('gulp-concat-css')
const autoprefixer = require('gulp-autoprefixer')
const shorthand = require('gulp-shorthand')
const minify = require('gulp-clean-css')

module.exports = function buildCss() {
  return src('src/scss/*.scss')
    .pipe(cleanDir('build/css'))
    .pipe(sass())
    .pipe(concat('main.min.css'))
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(minify())
    .pipe(dest('build/css'))
}
