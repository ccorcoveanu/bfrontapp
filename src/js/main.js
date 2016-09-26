require('../styles/main.scss')
require('hammerjs')

import ClickSpeed from './modules/clickspeed'
import Hamburger from './modules/hamburger'

window.onload = function() {
  // Optimizations
  ClickSpeed(); // Attach touch speedup
  document.addEventListener('touchstart', function(ev){return;}, {})

  // Sidebar
  let menu = document.getElementById('sidebar--container--element')
  let menu_width = menu.offsetWidth

  const hammerjs = new Hammer(
    document.getElementsByClassName('resize--controller')[0],
    {
      direction: Hammer.DIRECTION_HORIZONTAL,
    }
  )

  hammerjs.get('pan').set({threshold: 1})

  hammerjs.on('panstart', function(ev) {
    document.getElementsByTagName('body')[0].classList.add('js-selection-disabled')
  })
  hammerjs.on('panend', function(ev) {
    document.getElementsByTagName('body')[0].classList.remove('js-selection-disabled')
    menu_width = menu.offsetWidth
    console.log(menu_width)
  })

  hammerjs.on('pan', function(ev) {
    let width = menu_width + ev.deltaX
    console.log(ev)
    console.log(width)
    menu.style.width = width + 'px'
  })

  // Hamburger events
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



