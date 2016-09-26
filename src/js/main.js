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
    menu_width = menu.offsetWidth
    menu.classList.remove('-animate')
    menu.classList.remove('-closed')
    menu.classList.remove('-open')
    document.getElementsByTagName('body')[0].classList.add('js-selection-disabled')
  })
  hammerjs.on('panend', function(ev) {
    document.getElementsByTagName('body')[0].classList.remove('js-selection-disabled')
    menu.classList.add('-animate')
    menu_width = menu.offsetWidth

    if ( menu_width > 100 ) {
      menu.classList.add('-open')

      //menu.style.width = ''
    } else {
      menu.classList.add('-closed')

      menu.style.width = '';
    }
  })

  hammerjs.on('pan', function(ev) {
    let width = menu_width + ev.deltaX
    menu.style.width = width + 'px'

    let x =  opacity(document.querySelector('.sidebar--nav .icon--link').clientWidth - 105)

    //menu.style.opacity = x;
  })

  function opacity(x) {

    x = Math.round(parseInt(x))

    if ( x <= 10 ) return 0
    if ( x >= 100 ) return 1



    return (((x - 5)/100) * 0.9).toFixed(2)
  }

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



