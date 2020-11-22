const { src, dest } = require('gulp')
const cleanDir = require('gulp-clean-dir')

const convertedToBase64 = [
  'src/images/portfolio/**',
  'src/images/services/**',
  'src/images/footer/**',
]

module.exports = () => {
  return (
    src(
      'src/images/**/*.{ico,png,jpg,svg,webp}',
      { ignore: convertedToBase64 }
    )
    .pipe(cleanDir('build/images'))
    .pipe(dest('build/images'))
  )
}
