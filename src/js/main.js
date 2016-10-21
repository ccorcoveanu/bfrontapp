require('../styles/main.scss')
require('hammerjs')

import ClickSpeed from './modules/clickspeed'
import Hamburger from './modules/hamburger'
import SidebarEvents from './modules/sidebar/events'
import Interchange from './modules/boxes/interchange'
import BoxOptions from './modules/boxes/box-options'
import Datepicker from './modules/datepicker'

window.onload = function() {

  let interchange = new Interchange(
    'box--item'
  )
  let boxOptions = new BoxOptions()

  let datepickers = document.querySelectorAll('.kiss--datepicker')
  if ( datepickers.length ) {
    let DP = new Datepicker(datepickers)
  }

  // Optimizations
  //ClickSpeed();
  document.addEventListener('touchstart', function(ev){return;}, {})
  // End optimizations

  // Sidebar
  SidebarEvents.init()

  // Hamburger events
  const h = new Hamburger()
  document.getElementById('hamburger--link')
    .addEventListener('click', (evt) => {
      h.toggleState(document.getElementById('hamburger--link'))
    })

  const popup_links = document.getElementsByClassName('popup--link')

  for ( let i = 0; i < popup_links.length; i++ ) {
    popup_links[i].addEventListener('click', (evt) => {
      h.toggleState(popup_links[i])
    })
  }

  document.querySelector('.kiss--control .-search').addEventListener('click', (evt) => {
    let searchContainer = document.getElementsByClassName('search-and-options--container')[0];
    if ( searchContainer.classList.contains('-searching') ) return false;

    searchContainer.classList.add('-searching')
    document.querySelector('.search--input').focus()
    document.getElementsByTagName('body')[0].classList.add('-popup__open')
  })

  document.querySelector('.kiss--control .-back').addEventListener('click', (evt) => {
    let searchContainer = document.getElementsByClassName('search-and-options--container')[0];
    if ( !searchContainer.classList.contains('-searching') ) return false;

    searchContainer.classList.remove('-searching')
    document.getElementsByTagName('body')[0].classList.remove('-popup__open')
  })

  // End hamburger events

  // Befor refactor code

  let boxFormEditElements = document.querySelectorAll('.finfo--block .icon.-pencil');

  for ( let i = 0; i < boxFormEditElements.length; i++ ) {
    boxFormEditElements[i].addEventListener('click', function(ev) {
      let toggleEl = this.parentNode.parentNode.parentNode;
      toggleEl.classList.toggle('-edit-mode');
    });
  }

  let boxFormMinimizeElements = document.querySelectorAll('.finfo--block .icon.-minus');

  for ( let i = 0; i < boxFormMinimizeElements.length; i++ ) {
    boxFormMinimizeElements[i].addEventListener('click', function(ev) {
      let toggleEl = this.parentNode.parentNode.parentNode;
      toggleEl.classList.add('-is-closed');
    });
  }

  let boxFormMaximizeElements = document.querySelectorAll('.finfo--block .icon.-plus');

  for ( let i = 0; i < boxFormMaximizeElements.length; i++ ) {
    boxFormMaximizeElements[i].addEventListener('click', function(ev) {
      let toggleEl = this.parentNode.parentNode.parentNode;
      toggleEl.classList.remove('-is-closed');
    });
  }


}

if ( module.hot ) {
  module.hot.accept()
  module.hot.dispose(function() {
    //SidebarEvents.reset()
  })
}



