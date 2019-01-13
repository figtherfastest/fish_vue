import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../views/login/login')
    },
    {
      path: '/register',
      component: () => import('../views/register/register')
    },
    {
      path: '/resetPassword',
      component: () => import('../views/resetPassword/resetPassword')
    },
    {
      path: '',
      component: () => import('../views/main/main'),
      children: [
        {
          path: '/index',
          component: () => import('../views/index/index')
        },
        {
          path: '/bookDetail',
          component: () => import('../views/bookDetail/bookDetail')
        }
      ]
    }
  ]
})
