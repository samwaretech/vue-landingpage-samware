import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import service from '../views/service.vue'
import about from '../views/about.vue'
import portofolio from '../views/portofolio.vue'
import faq from '../views/faq.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/service',
    name: 'service',
    component: service
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/portofolio',
    name: 'portofolio',
    component: portofolio
  },
  {
    path: '/faq',
    name: 'faq',
    component: faq
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
