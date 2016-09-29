/**
 * Small module to test performance of different js approaches if
 * I get courious. Made this as a module inside the project
 * to test in a real enviroment
 */

const exectute = () => renderMenuChanges()

// Which is faster:
// 1. Add, remove classes and change some styles on some elements
// 2. Or create a copy and replace the top item
const renderMenuChanges = () => {
  let body = document.getElementsByTagName('body')[0]
  let menu = document.getElementById('sidebar--container--element')


  console.time('StartChange')
  for ( let i = 0; i < 1000; i++ ) {
    menu.style.width += 1;
    menu.classList.add('class1' , 'class2')
    menu.classList.remove('class1', 'class2')
    menu.style.color = 'red'
    menu.style.color = 'green'
  }
  console.timeEnd('StartChange')

  console.time('StartReplace')
  for ( let i = 0; i < 1000; i++ ) {
    let clone = menu.cloneNode(true)
    clone.classList.add('class1' , 'class2')
    clone.classList.remove('class1', 'class2')
    clone.style.color = 'red'
    clone.style.color = 'green'
  }
  console.timeEnd('StartReplace')
}

export default exectute