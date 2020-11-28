const { src, dest } = require('gulp')
const cleanDir = require('gulp-clean-dir')
const pug = require('gulp-pug')
const htmlValidator = require('gulp-w3c-html-validator')
const fs = require('fs')
const imageBase64 = require('image-base64')
const projectInfo = require('./../src/data/project-info')
const portfolio = require('./../src/data/portfolio')
const services = require('./../src/data/services')
const footer = require('./../src/data/footer')

everyImageToBase64(portfolio)
everyImageToBase64(services)
everyImageToBase64(footer)

let data = {}

addToData(data, projectInfo)
addToData(data, portfolio)
addToData(data, services)
addToData(data, footer)

addBundleCssJsToData(data)

deleteTempFiles()

module.exports = function buildHtml() {
  return src('src/pages/*.pug')
    .pipe(cleanDir('build', { ext: ['.html'] }))
    .pipe(pug({ data: data }))
    .pipe(htmlValidator())
    .pipe(dest('build'))
}

function everyImageToBase64(data) {
  data[Object.keys(data)[0]].forEach((value) => {
    value.src = imageBase64.local(value.src)
  })
}

function addToData(data, info) {
  for (let key in info) {
    data[key] = info[key]
  }
}

function addBundleCssJsToData(data) {
  data['bundleCss'] = fs.readFileSync('./build/css/bundle.css')
  data['bundleJs'] = fs.readFileSync('./build/js/bundle.js')
}

function deleteTempFiles() {
  if (process.env.NODE_ENV == 'prod') {
    fs.rmdirSync('./build/css', { recursive: true })
    fs.rmdirSync('./build/js', { recursive: true })
  }
}
