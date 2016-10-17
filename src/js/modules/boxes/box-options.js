'use strict'

class BoxOptions {

  constructor() {
    console.log('init')
    this.initEvents()
  }

  initEvents() {
    this.close()
    this.minimize()
    this.maximize()
  }

  close() {
    function close(evt) {
      let box = this.getParentArticle(evt.target, 'box--item')
      return box.parentNode.removeChild(box)
    }
    let elements = document.querySelectorAll('.box--item .-controls .-close')
    for ( let i=0; i<elements.length; i++ ) {
      elements[i].addEventListener('click', close.bind(this))
    }
  }

  minimize() {
    function minimize(evt) {
      let box = this.getParentArticle(evt.target, 'box--item')
      return box.classList.add('-minimized')
    }
    let elements = document.querySelectorAll('.box--item .-controls .-minus')
    for ( let i=0; i<elements.length; i++ ) {
      elements[i].addEventListener('click', minimize.bind(this))
    }
  }

  maximize() {
    function maximize(evt) {
      let box = this.getParentArticle(evt.target, 'box--item')
      return box.classList.remove('-minimized')
    }
    let elements = document.querySelectorAll('.box--item .-controls .-plus')
    for ( let i=0; i<elements.length; i++ ) {
      elements[i].addEventListener('click', maximize.bind(this))
    }
  }

  getParentArticle(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }
}

export default BoxOptions