'use strict'

import render from '../htmlelement/render'

const Sidebar = () => {

  return {
    resize: resize,
    bounce: bounce,
    panStart: panStart,
    panEnd: panEnd,
    swipeLeft: swipeLeft
  }

  function panStart(sidebarContainer, disableSelection = true) {
    if ( disableSelection ) {
      document.getElementsByTagName('body')[0].classList.add('js-selection-disabled')
    }
    return render(sidebarContainer, {
      classList: {
        add: [ '-resizing' ],
        remove: [ '-animate', '-closed', '-open', '-bounce' ]
      },
    })
  }

  function panEnd(sidebarContainer, minWidth = 130, reEnableSelection = true) {
    if ( reEnableSelection ) {
      document.getElementsByTagName('body')[0].classList.remove('js-selection-disabled')
    }

    let settings = {
      classList: {
        add: [ '-animate' ],
        remove: [ '-resizing', '-bounce' ]
      }
    }

    if ( sidebarContainer.offsetWidth >  minWidth ) {
      settings.classList.add.push('-open')
    } else {
      settings.classList.add.push('-closed')
      settings.style = { width: '' }
    }

    return render(sidebarContainer, settings)
  }

  function swipeLeft(sidebarContainer) {
    document.getElementsByTagName('body')[0].classList.remove('js-selection-disabled')
    return render(sidebarContainer, {
      classList: {
        add: [ '-animate', '-closed' ],
        remove: [ '-resizing', '-bounce' ]
      },
      style: { width: '' }
    })
  }

  function resize(sidebarContainer, toSize) {

    return render(sidebarContainer, {
      classList: {
        remove: [ '-bounce' ]
      },
      style: { width: toSize + 'px' }
    })
  }

  function bounce(sidebarContainer, toSize, direction = 'toright') {
    if ( direction === 'toright'  ) {
      return render(sidebarContainer, {
        classList: {
          add: [ '-bounce' ],
          remove: [ '-closed', '-animate' ]
        }
      })
    }

    return sidebarContainer
  }
}

export default Sidebar()