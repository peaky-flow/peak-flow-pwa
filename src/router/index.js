import Vue from "vue";
import VueRouter from "vue-router";
import Add from "../components/Add.vue"
import Email from "../components/Email.vue"
import List from "../components/List.vue"
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Add },
  { path: "/list",component: List },
  { path: "/email", component: Email },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
