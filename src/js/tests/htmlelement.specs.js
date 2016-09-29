import render from '../modules/htmlelement/render'

describe('Test render module', () => {

  let _renderModule;
  let _element;

  beforeEach(() => {
    _element = document.createElement('p')
    _element.style.width = '10px'
    _element.classList.add('class1')
    _renderModule = render;

  })

  it('should change width to 20px', () => {
    _renderModule(_element, {style: {width: '20px'}})
    expect(_element.style.width).toBe('20px')
  })

  it('should add css style attribute', () => {
    _renderModule(_element, {style: {height: '100px'}})
    expect(_element.style.height).toBe('100px')
  })

  it('should add another class', () => {
    _renderModule(_element, {classList: {add: ['class2']}})
    expect(_element.className).toBe('class1 class2')
  })

  it('should add remove a class', () => {
    _renderModule(_element, {classList: {add: ['class2'], remove: ['class1']}})
    expect(_element.className).toBe('class2')
  })
})