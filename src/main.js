// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAnalytics from 'vue-analytics'
import router from './router'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './stylesheets/main.scss'

Vue.config.productionTip = false
if (window.location.hostname !== 'localhost') {
  Vue.use(VueAnalytics, {
    id: 'UA-92177503-4',
    router
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
