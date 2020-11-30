// Small screen nav

const nav = document.querySelector('.nav')
const burgerNavButton = document.querySelector('.burger-nav')

const openSmallScreenNav = () => {
  nav.classList.add('nav_open')
  burgerNavButton.classList.add('burger-nav_open')
  document.body.setAttribute('style', 'overflow-y:hidden')
}

const closeSmallScreenNav = () => {
  nav.classList.remove('nav_open')
  burgerNavButton.classList.remove('burger-nav_open')
  document.body.setAttribute('style', 'overflow-y:scroll')
}

burgerNavButton.addEventListener('click', () => {
  if (!nav.classList.contains('nav_open')) {
    openSmallScreenNav()
  } else {
    closeSmallScreenNav()
  }
})

// Opacity nav background

setOpacityToNavBg()

window.addEventListener('scroll', function () {
  setOpacityToNavBg()
})

function setOpacityToNavBg() {
  const opacity =
    pageYOffset / (portfolioStartPosition() - navBackgroundHeight())

  document.querySelector('.header__background').style.opacity = opacity
}

function navBackgroundHeight() {
  return document.querySelector('.header__background').offsetHeight
}

// Scroll to start

document.querySelector('#to-start').addEventListener('click', () => {
  smoothScrollTo(0)
  closeSmallScreenNav()
})

// Scroll to portfolio

const scrollToContentBtn = document.querySelector(
  '.start-screen__scroll-to-portfolio-btn'
)

scrollToContentBtn.addEventListener('click', () => {
  smoothScrollTo(portfolioStartPosition())
  closeSmallScreenNav()
})

function smoothScrollTo(top) {
  window.scrollTo({
    top: top - 55,
    behavior: 'smooth',
  })
}

document.querySelector('#to-portfolio').addEventListener('click', () => {
  smoothScrollTo(portfolioStartPosition())
  closeSmallScreenNav()
})

// Scroll to services

document.querySelector('#to-services').addEventListener('click', () => {
  smoothScrollTo(servicesStartPosition())
  closeSmallScreenNav()
})

// Scroll to contact

document.querySelector('#to-footer').addEventListener('click', () => {
  smoothScrollTo(footerStartPosition())
  closeSmallScreenNav()
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
