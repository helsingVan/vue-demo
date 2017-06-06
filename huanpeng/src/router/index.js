import Vue from 'vue'
import Router from 'vue-router'
// import Vuex from 'vuex'

import Home from '@/components/home/home'
import Classify from '@/components/classify/classify'
import Game from '@/components/game/game'
import Search from '@/components/search/search'
import Hot from '@/components/home/hot'
import HomeMore from '@/components/home/home-more'

Vue.use(Router)
// Vue.use(Vuex)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/home-more',
      name: 'homeMore',
      component: HomeMore
    }
  ]
})
