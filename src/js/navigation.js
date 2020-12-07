// Small screen nav

const nav = document.querySelector('.nav')
const burgerNavButton = document.querySelector('.burger-nav')

const openSmallScreenNav = () => {
  nav.classList.add('nav_open')
  burgerNavButton.classList.add('burger-nav_open')
  document.body.style.overflowY = 'hidden'
}

const closeSmallScreenNav = () => {
  nav.classList.remove('nav_open')
  burgerNavButton.classList.remove('burger-nav_open')
  document.body.style.overflowY = ''
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

window.addEventListener('scroll', () => {
  setOpacityToNavBg()
})

function setOpacityToNavBg() {
  const portfolioStartPosition = document.querySelector('.start-screen').offsetHeight
  const navBackgroundHeight = document.querySelector('.header__background').offsetHeight

  const opacity = pageYOffset / (portfolioStartPosition - navBackgroundHeight)

  document.querySelector('.header__background').style.opacity = opacity
}

// Scroll to start

document.querySelector('#to-start').addEventListener('click', () => {
  smoothScrollIntoView(document.querySelector('.start-screen'))
  closeSmallScreenNav()
})

function smoothScrollIntoView(elem) {
  elem.scrollIntoView({
    behavior: 'smooth',
  })
}

// Scroll to portfolio

const scrollToContentBtn = document.querySelector(
  '.start-screen__scroll-to-portfolio-btn'
)

scrollToContentBtn.addEventListener('click', () => {
  smoothScrollIntoView(document.querySelector('.portfolio'))
  closeSmallScreenNav()
})

document.querySelector('#to-portfolio').addEventListener('click', () => {
  smoothScrollIntoView(document.querySelector('.portfolio'))
  closeSmallScreenNav()
})

// Scroll to services

document.querySelector('#to-services').addEventListener('click', () => {
  smoothScrollIntoView(document.querySelector('.services'))
  closeSmallScreenNav()
})

// Scroll to contact

document.querySelector('#to-footer').addEventListener('click', () => {
  smoothScrollIntoView(document.querySelector('.footer'))
  closeSmallScreenNav()
})
