import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/PageHome'
import PageAbout from '@/components/PageAbout'
import PagePost from '@/components/PagePost'

Vue.use(Router)

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
    }
  ]
})
