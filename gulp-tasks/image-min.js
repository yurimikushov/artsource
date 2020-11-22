const { src, dest } = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = () => {
  return src('src/images/**/*.{ico,png,jpg,svg,webp}')
    .pipe(imagemin())
    .pipe(dest('src/images'))
}
