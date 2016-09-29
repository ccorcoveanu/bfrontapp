const render =  (element, state = {}) => {
  if ( !state ) return element;

  if ( 'style' in state ) {
    // Set style attribute
    style(element, state.style)
  }

  if ( 'classList' in state ) {
    // Set new class list
    classes(element, state.classList)
  }


  function style(element, style) {
    Object.assign(element.style, style)
    return element
  }

  function classes(element, classes) {
    if ( 'add' in classes ) {
      element.classList.add(...classes.add)
    }
    if ( 'remove' in classes ) {
      element.classList.remove(...classes.remove)
    }

    return element
  }
}

export default render