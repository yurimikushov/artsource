const CLASS_NAMES = {
  START_SCREEN: 'start-screen',
  HEADER_BACKROUND: 'header__background',
  NAVIGATION: 'nav',
  NAVIGATION_ITEMS: 'nav__items',
  NAVIGATION_ITEM: 'nav__item',
  NAVIGATION_OPEN: 'nav_open',
  NAVIGATION_ITEMS_OPEN: 'nav__items_open',
  NAVIGATION_ITEM_OPEN: 'nav__item_open',
  BURGER_NAVIGATION: 'burger-nav',
  BURGER_NAVIGATION_OPEN: 'burger-nav_open',
  SCROLL_TO_PORTFOLIO_BTN: 'start-screen__scroll-to-portfolio-btn',
  PORTFOLIO: 'portfolio',
  SERVICES: 'services',
  FOOTER: 'footer',
}

const select = (selector) => document.querySelector('.' + selector)
const selectAll = (selector) => document.querySelectorAll('.' + selector)

const startScreen = select(CLASS_NAMES.START_SCREEN)
const headerBg = select(CLASS_NAMES.HEADER_BACKROUND)
const nav = select(CLASS_NAMES.NAVIGATION)
const navItemsContainer = select(CLASS_NAMES.NAVIGATION_ITEMS)
const navItems = selectAll(CLASS_NAMES.NAVIGATION_ITEM)
const burgerNavButton = select(CLASS_NAMES.BURGER_NAVIGATION)
const scrollToContentBtn = select(CLASS_NAMES.SCROLL_TO_PORTFOLIO_BTN)
const portfolio = select(CLASS_NAMES.PORTFOLIO)
const services = select(CLASS_NAMES.SERVICES)
const footer = select(CLASS_NAMES.FOOTER)

// Small screen nav

const openSmallScreenNav = () => {
  nav.classList.add(CLASS_NAMES.NAVIGATION_OPEN)
  navItemsContainer.classList.add(CLASS_NAMES.NAVIGATION_ITEMS_OPEN)
  navItems.forEach((navItem) =>
    navItem.classList.add(CLASS_NAMES.NAVIGATION_ITEM_OPEN)
  )
  burgerNavButton.classList.add(CLASS_NAMES.BURGER_NAVIGATION_OPEN)

  document.body.style.overflowY = 'hidden'
}

const closeSmallScreenNav = () => {
  nav.classList.remove(CLASS_NAMES.NAVIGATION_OPEN)
  navItemsContainer.classList.remove(CLASS_NAMES.NAVIGATION_ITEMS_OPEN)
  navItems.forEach((navItem) =>
    navItem.classList.remove(CLASS_NAMES.NAVIGATION_ITEM_OPEN)
  )
  burgerNavButton.classList.remove(CLASS_NAMES.BURGER_NAVIGATION_OPEN)

  document.body.style.overflowY = ''
}

burgerNavButton.addEventListener('click', () => {
  if (nav.classList.contains(CLASS_NAMES.NAVIGATION_OPEN)) {
    closeSmallScreenNav()
  } else {
    openSmallScreenNav()
  }
})

// Opacity nav background

setOpacityToNavigationBg()

window.addEventListener('scroll', () => {
  setOpacityToNavigationBg()
})

function setOpacityToNavigationBg() {
  const opacity =
    pageYOffset / (startScreen.offsetHeight - headerBg.offsetHeight)

  headerBg.style.opacity = opacity
}

// Scroll to start

document.querySelector('#to-start').addEventListener('click', () => {
  smoothScrollIntoView(startScreen)
  closeSmallScreenNav()
})

function smoothScrollIntoView(elem) {
  window.scrollTo({
    top: elem.getBoundingClientRect().top + pageYOffset - headerBg.offsetHeight,
    behavior: 'smooth',
  })
}

// Scroll to portfolio

scrollToContentBtn.addEventListener('click', () => {
  smoothScrollIntoView(portfolio)
  closeSmallScreenNav()
})

document.querySelector('#to-portfolio').addEventListener('click', () => {
  smoothScrollIntoView(portfolio)
  closeSmallScreenNav()
})

// Scroll to services

document.querySelector('#to-services').addEventListener('click', () => {
  smoothScrollIntoView(services)
  closeSmallScreenNav()
})

// Scroll to contact

document.querySelector('#to-footer').addEventListener('click', () => {
  smoothScrollIntoView(footer)
  closeSmallScreenNav()
})
