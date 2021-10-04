import Vue from 'vue'

Vue.filter('formatToEuroCurrency', function (number) {
  return `${number.toString().replace('.', ',')} €`
})
