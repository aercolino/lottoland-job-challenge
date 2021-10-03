import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import axios from 'axios';

Vue.config.productionTip = false

// FIXME currency conversion rates should come from an API
// not only because these are static, i.e. not current
// but also because I guess this subject is regulated.
// For example, it's reasonable that the applied rate is
// the one which is current when the prize is transferred
// to the winner, but it's also reasonable that the displayed
// rate is the one which was current when the balls rolled.
// In both cases it's not the rate which is current when 
// the page is displayed.

// Assume the currency of the JSON response is always EUR
Vue.prototype.$oneEuroTo = {
  'EUR': 1,
  'SEK': 10.14,
};

Vue.prototype.$axios = axios.create();

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
