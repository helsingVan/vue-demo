import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import Goods from '@/components/goods/goods'
import Seller from '@/components/seller/seller'
import Ratings from '@/components/ratings/ratings'

Vue.use(Router)
Vue.prototype.$axios = Axios

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/seller',
      component: Seller
    },
    {
      path: '/ratings',
      component: Ratings
    }
  ],
  linkActiveClass: 'active'
})
