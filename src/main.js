import 'bootstrap';
import '@/assets/styles.scss';
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt, faEnvelope, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPencilAlt)
library.add(faEnvelope)
library.add(faList)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
