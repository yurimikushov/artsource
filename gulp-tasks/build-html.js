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

module.exports = function buildHtml() {
  return src('src/pages/*.pug')
    .pipe(cleanDir('build', { ext: ['.html'] }))
    .pipe(pug({ data: data() }))
    .pipe(htmlValidator())
    .pipe(dest('build'))
}

function data() {
  if (process.env.NODE_ENV == 'prod') {
    everyImageToBase64(portfolio)
    everyImageToBase64(services)
    everyImageToBase64(footer)
  } else {
    correctEveryImageSrc(portfolio)
    correctEveryImageSrc(services)
    correctEveryImageSrc(footer)
  }

  const data = new ProjectDataBuilder()
    .add(projectInfo)
    .add(portfolio)
    .add(services)
    .add(footer)
    .addBundleCssJs()
    .toObject()

  return data
}

function everyImageToBase64(data) {
  data[Object.keys(data)[0]].forEach((value) => {
    value.src = imageBase64.local(value.src)
  })
}

function correctEveryImageSrc(data) {
  data[Object.keys(data)[0]].forEach((value) => {
    value.src = value.src.replace('./src', '')
  })
}

class ProjectDataBuilder {
  constructor() {
    this.data = {}
  }

  add(data) {
    for (let key in data) {
      this.data[key] = data[key]
    }

    return this
  }

  addBundleCssJs() {
    this.data['bundleCss'] = fs.readFileSync('./build/css/bundle.css')
    this.data['bundleJs'] = fs.readFileSync('./build/js/bundle.js')

    this._deleteTempFiles()

    return this
  }

  toObject() {
    return this.data
  }

  _deleteTempFiles() {
    if (process.env.NODE_ENV == 'prod') {
      fs.rmdirSync('./build/css', { recursive: true })
      fs.rmdirSync('./build/js', { recursive: true })
    }
  }
}
