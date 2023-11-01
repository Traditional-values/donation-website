import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Donate from './views/Donate.vue'
import ThankYou from "./views/ThankYou.vue"
import MobileFirst from "./views/MobileFirst.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate,
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYou,
  },
  {
    path: "/mobile-first",
    name: "MobileFirst",
    component: MobileFirst,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router