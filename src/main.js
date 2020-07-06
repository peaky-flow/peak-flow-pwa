import "bootstrap";
import "@/assets/styles.scss";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { faPencilAlt, faEnvelope, faList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install();


library.add(faPencilAlt)
library.add(faEnvelope)
library.add(faList)


Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
