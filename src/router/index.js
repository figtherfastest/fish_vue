import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register/register')
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: () => import('../views/resetPassword/resetPassword')
    },
    {
      path: '',
      component: () => import('../views/main/main'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/index/index')
        },
        {
          path: '/bookDetail',
          name: 'bookDetail',
          component: () => import('../views/bookDetail/bookDetail')
        },
        {
          path: '/wishList',
          name: 'wishList',
          component: () => import('../views/wishList/wishList')
        },
        {
          path: '/giftList',
          name: 'giftList',
          component: () => import('../views/giftList/giftList')
        },
        {
          path: '/drift',
          name: 'drift',
          component: () => import('../views/drift/drift')
        }
      ]
    }
  ]
})
route.beforeEach((to, from, next) => {
  console.log(from)
  next()
})
route.afterEach((to, from) => {
})
export default route
