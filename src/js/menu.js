setOpacityToMenuBg()

window.addEventListener('scroll', function () {
  setOpacityToMenuBg()
})

function setOpacityToMenuBg() {
  const menuBackgroundHeight = 55
  const opacity = pageYOffset / (contentBlockHeight() - menuBackgroundHeight)

  document.querySelector('.menu-background').style.opacity = opacity
}

function contentBlockHeight() {
  return document.querySelector('#start-screen').offsetHeight
}
