// Small screen menu

const menu = document.querySelector('.menu')

const openSmallScreenMenu = () => {
  menu.classList.add('is-open')
  document.body.setAttribute('style', 'overflow-y:hidden')
}

const closeSmallScreenMenu = () => {
  menu.classList.remove('is-open')
  document.body.setAttribute('style', 'overflow-y:scroll')
}

document.querySelector('.burger-menu').addEventListener('click', () => {
  if (!menu.classList.contains('is-open')) {
    openSmallScreenMenu()
  } else {
    closeSmallScreenMenu()
  }
})

// Opacity menu background

setOpacityToMenuBg()

window.addEventListener('scroll', function () {
  setOpacityToMenuBg()
})

function setOpacityToMenuBg() {
  const opacity =
    pageYOffset / (portfolioStartPosition() - menuBackgroundHeight())

  document.querySelector('.menu-background').style.opacity = opacity
}

function menuBackgroundHeight() {
  return document.querySelector('.menu-background').offsetHeight
}

// Scroll to start

document.querySelector('#to-start').addEventListener('click', () => {
  smoothScrollTo(0)
  closeSmallScreenMenu()
})

// Scroll to portfolio

const scrollToContentBtn = document.querySelector('.scroll-to-portfolio-btn')

scrollToContentBtn.addEventListener('click', () => {
  smoothScrollTo(portfolioStartPosition())
  closeSmallScreenMenu()
})

function smoothScrollTo(top) {
  window.scrollTo({
    top: top - 55,
    behavior: 'smooth',
  })
}

document.querySelector('#to-portfolio').addEventListener('click', () => {
  smoothScrollTo(portfolioStartPosition())
  closeSmallScreenMenu()
})

// Scroll to services

document.querySelector('#to-services').addEventListener('click', () => {
  smoothScrollTo(servicesStartPosition())
  closeSmallScreenMenu()
})

// Scroll to contact

document.querySelector('#to-footer').addEventListener('click', () => {
  smoothScrollTo(footerStartPosition())
  closeSmallScreenMenu()
})

// Calculate blocks start positions

function portfolioStartPosition() {
  return document.querySelector('.start-screen').offsetHeight
}

function servicesStartPosition() {
  return (
    portfolioStartPosition() + document.querySelector('.portfolio').offsetHeight
  )
}

function footerStartPosition() {
  return (
    servicesStartPosition() + document.querySelector('.services').offsetHeight
  )
}
