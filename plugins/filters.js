import Vue from 'vue'

Vue.filter('formatToEuroCurrency', function (number) {
  return `${number.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
})
