<template>
  <div class="page" id="aboutPAGE">
    <Navigation v-if="!loading" />

    <div class="container loading" v-if="loading" v-bind:class="{ active: loading }">
      <Loading id="loading" />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 v-html="title"></h1>
        </div>
      </div>
    </div>

    <transition name="body">
      <div class="content" v-if="!loading">
        <div class="container">
          <div class="postBody" v-html="body"></div>
        </div>
      </div>
    </transition>

    <PageFooter v-if="!loading" />
  </div>
</template>

<script>
import methods from '../functions/methods.js'
import Navigation from './Navigation.vue'
import Loading from '../assets/images/loading.vue'
import PageFooter from './PageFooter.vue'

export default {
  name: 'PageAbout',

  components: {
    Loading,
    Navigation,
    PageFooter
  },

  methods: methods,

  data () {
    return {
      loading: true,
      title: '',
      body: ''
    }
  },

  created () {
    var pageId = 86
    this.fetchSinglePage(response => {
      this.title = response.title.rendered
      this.body = response.content.rendered
      this.loading = false
    }, pageId)
  }
}
</script>

<style lang="scss">
.body-enter-active, .body-leave-active {
  transform: translateY(0);
  opacity: 1;
  transition: 500ms;
  transition-delay: 250ms;
}
.body-enter, .body-leave-to {
  opacity: 0;
  transform: translateY(25px);
}
</style>
