'use strict'

import Sidebar from './'


const SidebarEvents = () => {

  const returnMethods = {
    init: init,
    reset: reset
  }

  let hammerjs;
  let swipeInProgress;
  let menuWidth;
  let minimumWidth;
  let sidebar;

  return returnMethods;


  function init() {
    sidebar = document.getElementById('sidebar--container--element')
    swipeInProgress = false;
    minimumWidth  = 130;
    // Set up hammerjs
    hammerjs = new Hammer(
      document.getElementsByClassName('resize--controller')[0],
      {
        direction: Hammer.DIRECTION_HORIZONTAL,
      }
    )
    // Set low threshold for pan - begin resizing after first px
    hammerjs.get('pan').set({threshold: 1})

    // Set up pan event
    hammerjs.on('panstart', function(ev) {
      menuWidth       = sidebar.offsetWidth
      swipeInProgress = false // Set up panstart at the beginning of every pan
      Sidebar.panStart(sidebar) // Reset sidebar classes
    })

    hammerjs.on('panend', function(ev) {
      if ( swipeInProgress ) return false
      menuWidth = sidebar.offsetWidth
      Sidebar.panEnd(sidebar)
    })

    hammerjs.on('swipeleft', function(ev) {
      swipeInProgress = true
      Sidebar.swipeLeft(sidebar)
    })

    hammerjs.on('pan', function(ev) {
      if ( swipeInProgress ) return false
      Sidebar.resize(sidebar, menuWidth + ev.deltaX)
    })

    hammerjs.on('tap', function(ev) {

      swipeInProgress = true
      Sidebar.bounce(sidebar, 320)
    })

    sidebar.addEventListener('touchstart', function(ev) {
      // Let the user know that he can do something
      if ( 'vibrate' in navigator ) {
        navigator.vibrate(20)
      }
    })
  }

  function reset() {
    hammerjs.off('pan')
    hammerjs.off('panstart')
    hammerjs.off('panend')
    hammerjs.off('swipeleft')
    hammerjs = null

    init()
  }
}

export default SidebarEvents()