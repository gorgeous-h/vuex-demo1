import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('../views/Counter.vue')
  },
  {
    path: '/counter2',
    name: 'Counter2',
    component: () => import('../views/Counter2.vue')
  },
  {
    path: '/asynchronous',
    name: 'Asynchronous',
    component: () => import('../views/Asynchronous.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
