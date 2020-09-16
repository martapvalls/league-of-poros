import Vue from 'vue'
import VueRouter from 'vue-router'
import {Home, Champions, ChampionDetail, Summoner, SummonerDetail} from '../views'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
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
  },
  {
    path: '/summoner/:name',
    name: 'SummonerDetail',
    component: SummonerDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
