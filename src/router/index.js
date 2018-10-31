import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
import PageHome from '@/components/PageHome'
import PageAbout from '@/components/PageAbout'
import PagePost from '@/components/PagePost'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    },
    {
      path: '/about',
      name: 'PageAbout',
      component: PageAbout
    },
    {
      path: '/story/:slug',
      name: 'PagePost',
      component: PagePost
    },
    {
      path: '/admin',
      beforeEnter: (to, from, next) => {
        var win = window.open('http://67.207.85.161/displaced/wp-admin', '_blank')
        win.focus()
        next(false)
      }
    }
  ]
})
