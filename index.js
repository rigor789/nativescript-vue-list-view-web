import Vue from 'vue'
import App from './App'

import ListView from './components/list-view'
import VTemplate from './components/v-template'

Vue.component('ListView', ListView)
Vue.component('VTemplate', VTemplate)

new Vue({
  el: '#app',
  render: h => h(App)
})
