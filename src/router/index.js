import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        component: () => import('@/pages/home/Home')
      }, {
        path: '/item',
        component: () => import('@/pages/item/Item')
      }, {
        path: '/score',
        component: () => import('@/pages/score/Score')
      }]
    }
  ]
})
