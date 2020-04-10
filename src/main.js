import 'bootstrap';
import '@/assets/styles.scss';
import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import Add from './components/Add.vue'
import Email from './components/Email.vue'
import List from './components/List.vue'
import './registerServiceWorker'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faEnvelope, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const routes = [
  { path: '/', component: Add },
  { path: '/list', component: List },
  { path: '/email', component: Email },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter)

library.add(faPencilAlt)
library.add(faEnvelope)
library.add(faList)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
