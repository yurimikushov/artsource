const imageBase64 = require('image-base64')
const portfolio = everyImageToBase64(require('./portfolio'))
const services = everyImageToBase64(require('./services'))
const footer = everyImageToBase64(require('./footer'))

module.exports = {
  title: 'Artsource',
  portfolio: portfolio,
  services: services,
  footer: footer,
}

function everyImageToBase64(data) {
  data.forEach((value) => {
    value.src = imageBase64.local(value.src)
  })

  return data
}
