'use strict'

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
    this.draggingCard = false

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

    evt.preventDefault()
  }

  onMove (evt) {
    if (!this.target)
      return
    this.currentX = evt.pageX || evt.touches[0].pageX
    this.currentY = evt.pageY || evt.touches[0].pageY
  }

  onEnd (evt) {
    if (!this.target)
      return

    this.draggingCard = false
    this.target = null
  }

  update () {
    requestAnimationFrame(this.update)

    if (!this.target)
      return

    if (this.draggingCard) {
      console.log(this.currentX)
      console.log(this.startX)
      this.screenX = this.currentX - this.startX
      this.screenY = this.currentY - this.startY
    } else {

    }

    this.target.style.transform = `translate(${this.screenX}px, ${this.screenY}px)`
  }
}

export default Interchange