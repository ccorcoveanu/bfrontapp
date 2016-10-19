'use strict'

const Pikaday = require('pikaday')

class Datepicker {

  constructor(elements) {
    this.datepickers = []
    for ( let i = 0; i < elements.length; i++ ) {
      this.datepickers.push(
        new Pikaday({
          field: elements[i],
          firstDay: 1,
          format: 'DD.MM.YYYY',
          minDate: new Date(2010, 0, 1),
          maxDate: new Date(2020, 12, 31),
          yearRange: [2010,2020]
        })
      )
    }
  }
}

export default Datepicker