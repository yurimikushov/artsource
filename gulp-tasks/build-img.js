const { src, dest } = require('gulp')

module.exports = function buildImg() {
  return src('src/images/*.{ico,png,jpg,svg,webp}').pipe(dest('build/images'))
}
