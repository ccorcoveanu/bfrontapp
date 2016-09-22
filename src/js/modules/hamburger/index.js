'use strict'

const Hamburger = () => {
  return {
    toggleState: toggleState
  }
  function toggleState(element) {
    console.log('test2')
    return element.classList.toggle('-is-active')
  }
}

export default Hamburger