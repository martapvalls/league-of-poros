import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Champions from '../views/Champions.vue'
import ChampionDetail from '../views/ChampionDetail.vue'
import Summoner from '../views/Summoner.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 /*  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( webpackChunkName: "about"  '../views/About.vue')
  },
   */
  {
    path: '/champions',
    name: 'Champions',
    component: Champions
  },
  {
    path: '/champion/:name',
    name: 'ChampionDetail',
    component: ChampionDetail
  },
  {
    path: '/summoner',
    name: 'Summoner',
    component: Summoner
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
