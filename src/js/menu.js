// Opacity menu background

setOpacityToMenuBg()

window.addEventListener('scroll', function () {
  setOpacityToMenuBg()
})

function setOpacityToMenuBg() {
  const opacity = pageYOffset / (contentBlockHeight() - menuBackgroundHeight())

  document.querySelector('.menu-background').style.opacity = opacity
}

function menuBackgroundHeight() {
  return document.querySelector('.menu-background').offsetHeight
}

function contentBlockHeight() {
  return document.querySelector('#start-screen').offsetHeight
}

// Scroll to content

const scrollToContentBtn = document.querySelector('.scroll-to-content-btn')

scrollToContentBtn.addEventListener('click', () => {
  smoothScrollTo(contentBlockHeight())
})

function smoothScrollTo(top) {
  window.scrollTo({
    top: top - 55,
    behavior: 'smooth',
  })
}
