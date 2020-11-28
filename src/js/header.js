// Small screen nav

const nav = document.querySelector('.nav')
const burgerNavButton = document.querySelector('.burger-nav-button')

const openSmallScreenNav = () => {
  nav.classList.add('nav-is-open')
  burgerNavButton.classList.add('burger-nav-button-is-open')
  document.body.setAttribute('style', 'overflow-y:hidden')
}

const closeSmallScreenNav = () => {
  nav.classList.remove('nav-is-open')
  burgerNavButton.classList.remove('burger-nav-button-is-open')
  document.body.setAttribute('style', 'overflow-y:scroll')
}

document.querySelector('.burger-nav-button').addEventListener('click', () => {
  if (!nav.classList.contains('nav-is-open')) {
    openSmallScreenNav()
  } else {
    closeSmallScreenNav()
  }
})

// Opacity nav background

setOpacityTonavBg()

window.addEventListener('scroll', function () {
  setOpacityTonavBg()
})

function setOpacityTonavBg() {
  const opacity =
    pageYOffset / (portfolioStartPosition() - navBackgroundHeight())

  document.querySelector('.header-background').style.opacity = opacity
}

function navBackgroundHeight() {
  return document.querySelector('.header-background').offsetHeight
}

// Scroll to start

document.querySelector('#to-start').addEventListener('click', () => {
  smoothScrollTo(0)
  closeSmallScreenNav()
})

// Scroll to portfolio

const scrollToContentBtn = document.querySelector('.scroll-to-portfolio-btn')

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
