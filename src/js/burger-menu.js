document.querySelector('.burger-menu').addEventListener('click', () => {
  const menu = document.querySelector('.menu')
  const body = document.body

  const toggleMenu = (openMenuClassName) => {
    if (menu.classList.contains(openMenuClassName)) {
      menu.classList.remove(openMenuClassName)
      body.setAttribute('style', 'overflow-y:scroll')
    } else {
      menu.classList.add(openMenuClassName)
      body.setAttribute('style', 'overflow-y:hidden')
    }
  }

  toggleMenu('is-open')
})
