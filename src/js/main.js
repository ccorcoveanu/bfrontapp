require('../styles/main.scss')

import Hamburger from './modules/hamburger'

window.onload = function() {
  const h = new Hamburger()
  document.getElementById('hamburger--link')
    .addEventListener('click', (evt) => h.toggleState(document.getElementById('hamburger--link')))
}

if ( module.hot ) {
  module.hot.accept()
}



