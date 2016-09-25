require('../styles/main.scss')

//document.addEventListener('touchstart', (evt) => {passive: true})

import Hamburger from './modules/hamburger'

window.onload = function() {
  const h = new Hamburger()
  document.getElementById('hamburger--link')
    .addEventListener('click', (evt) => h.toggleState(document.getElementById('hamburger--link')))

  const popup_links = document.getElementsByClassName('popup--link')

  for ( let i = 0; i < popup_links.length; i++ ) {
    popup_links[i].addEventListener('click', (evt) => h.toggleState(popup_links[i]))
  }
}

if ( module.hot ) {
  module.hot.accept()
}



