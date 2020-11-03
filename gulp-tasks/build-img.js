const { src, dest } = require('gulp')
const cleanDir = require('gulp-clean-dir')

module.exports = function buildImg() {
  return src('src/images/*.{ico,png,jpg,svg,webp}')
    .pipe(cleanDir('build/images'))
    .pipe(dest('build/images'))
}
