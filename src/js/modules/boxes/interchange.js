'use strict'

import debounce from '../helpers/debounce'

class Interchange {

  constructor () {

    this.overlayClassName = 'dnd-grid__dropzone'
    this.activeClassName = 'dnd-active-zone'
    this.overlay = document.querySelector('.' + this.overlayClassName)

    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.update = this.update.bind(this)

    this.targetBCR = null
    this.target = null
    this.startX = 0
    this.startY = 0
    this.currentX = 0
    this.currentY = 0
    this.screenX = 0
    this.screenY = 0
    this.targetX = 0
    this.targetY = 0
    this.targetIndex = false;
    this.draggingCard = false
    this.hoverBox = false // When dragging and cursor is hover the card, change

    this.boxesBounds = this.getBoxesBoundRects()
    this.boxes = document.querySelectorAll('.box--item')

    this.addEventListeners()
    requestAnimationFrame(this.update)
  }

  addEventListeners() {
    document.addEventListener('touchstart', this.onStart)
    document.addEventListener('touchmove', this.onMove)
    document.addEventListener('touchend', this.onEnd)

    document.addEventListener('mousedown', this.onStart)
    document.addEventListener('mousemove', this.onMove)
    document.addEventListener('mouseup', this.onEnd)
  }


  onStart (evt) {
    if ( this.target ) {
      return
    }
    if ( !evt.target.classList.contains(this.activeClassName) ) {
      return
    }

    this.target                   = evt.target.parentNode
    this.targetBCR                = this.target.getBoundingClientRect()
    this.startX                   = evt.pageX || evt.touches[0].pageX
    this.startY                   = evt.pageY || evt.touches[0].pageY
    this.currentX                 = this.startX
    this.currentY                 = this.startY
    this.draggingCard             = true
    this.target.style.willChange  = 'transform'
    this.target.style.zIndex      = 260
    this.target.style.position    = 'absolute'
    this.initDropzone()



    evt.preventDefault()
  }

  onMove (evt) {
    if (!this.target)
      return
    this.currentX = evt.pageX || evt.touches[0].pageX
    this.currentY = evt.pageY || evt.touches[0].pageY

    this.hoverBox = this.getHoverBox()

    if ( this.hoverBox !== false && this.hoverBox !== parseInt(this.target.dataset.item) ) {
      this.overlay.parentNode.insertBefore(this.overlay, this.boxes[this.hoverBox+1])
      this.boxes[this.hoverBox].parentNode.insertBefore(this.boxes[this.hoverBox-1], this.boxes[this.hoverBox+1])
    }
  }

  getHoverBox() {
    for ( let i = 0; i < this.boxesBounds.length; i++ ) {
      // Assume user ussualy drags on the horizontal, so the Y check is likely to fail first
      if ( (this.currentY > this.boxesBounds[i].top && this.currentY < this.boxesBounds[i].bottom)
          && (this.currentX > this.boxesBounds[i].left && this.currentX < this.boxesBounds[i].right) ) {

        return i // Return index
      }
    }
    return false // Careful with use
  }

  onEnd (evt) {
    if (!this.target)
      return

    this.targetX = 0
    this.targetY = 0
    this.draggingCard = false
  }

  update () {
    requestAnimationFrame(this.update)

    if (!this.target)
      return

    if (this.draggingCard) {
      this.screenX = this.currentX - this.startX - this.targetBCR.width-10
      this.screenY = this.currentY - this.startY
    } else {
      this.screenX += (this.targetX - this.screenX - this.targetBCR.width -10) / 4
      this.screenY += (this.targetY - this.screenY) / 4
    }

    let calcScreenX = this.screenX + this.targetBCR.width + 10

    const isNearlyAtStart = (Math.abs(calcScreenX) < 0.1 && Math.abs(this.screenY) < 0.1) && this.draggingCard === false
    this.target.style.transform = `translate(${this.screenX}px, ${this.screenY}px)`

    if ( isNearlyAtStart ) {
      this.resetTarget()
      this.destroyDropzone()
    }
  }

  initDropzone() {
    this.overlay.style.position = 'relative'
    this.overlay.style.width = this.targetBCR.width + 'px'
    this.overlay.style.height = this.targetBCR.height + 'px'
    this.overlay.parentNode.insertBefore(this.overlay, this.target)

    this.overlay.style.opacity = 1
  }

  destroyDropzone() {
    this.overlay.style.width = 0
    this.overlay.style.height = 0
    this.overlay.style.opacity = 0
    this.overlay.style.position = 'absolute'
  }

  resetTarget() {
    if (!this.target)
      return

    this.target.style.willChange = 'initial'
    this.target.style.transform = 'none'
    this.target.style.zIndex = 250
    this.target.style.position = 'relative'
    this.target = null
  }

  getBoxesBoundRects() {
    let elements = document.querySelectorAll('.box--item')
    let bounds = []

    for ( let i = 0; i < elements.length; i++ ) {
      bounds.push(elements[i].getBoundingClientRect())
    }

    console.log(bounds)

    return bounds;
  }
}

export default Interchange