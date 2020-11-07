const { src, dest } = require('gulp')
const cleanDir = require('gulp-clean-dir')
const imagemin = require('gulp-imagemin')

module.exports = function buildImg() {
  return src('src/images/**/*.{ico,png,jpg,svg,webp}')
    .pipe(cleanDir('build/images'))
    .pipe(imagemin())
    .pipe(dest('build/images'))
}
