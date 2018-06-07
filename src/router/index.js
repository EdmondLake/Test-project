import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [{
        path: '',
        name: 'Home',
        component: () => import('@/pages/home/Home')
      }, {
        path: '/item',
        name: 'Item',
        components: () => import('@/pages/item/Item')
      }]
    }
  ]
})
