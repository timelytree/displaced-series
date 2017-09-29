<template>
  <div class="page" id="postPAGE">
    <Navigation v-bind:loading="loading" />

    <div class="container loading" v-if="loading" v-bind:class="{ active: loading }">
      <Loading id="loading" />
    </div>

    <transition name="body">
      <div class="content" v-if="!loading">
        <div class="postBackgroundImg" :style="{ 'background-image': 'url(' + backgroundImg + ')' }"></div>

        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h1 class="postTitle" v-html="title"></h1>
              <div class="postAbstract" v-html="abstract"></div>
            </div>
            <div class="col-sm-6 post-social-icons">
              <h3>Share This Post</h3>
              <a :href="postPath" target="_blank"><img src="../assets/images/facebook_icon_black.svg" /></a>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="postBody" v-html="body"></div>
        </div>

        <div class="container">
          <h2 class="recent-posts-title">Recent Posts</h2>
          <div class="post-tile-list" v-if="!loading">
            <PostTile v-for="post in recentPosts" v-bind:post="post" :key="post.id" class="active" />
          </div>
        </div>

        <PageFooter v-bind:recentPosts="recentPosts"/>
      </div>
    </transition>


  </div>
</template>

<script>
import methods from '../functions/methods.js'
import Navigation from './Navigation.vue'
import PageFooter from './PageFooter.vue'
import Loading from '../assets/images/loading.vue'
import Logo from '../assets/images/logo.vue'
import PostTile from './PostTile.vue'

export default {
  name: 'PageHome',

  components: {
    Loading,
    Logo,
    Navigation,
    PostTile,
    PageFooter
  },

  methods: methods,

  data () {
    return {
      loading: true,
      backgroundImg: '',
      abstract: '',
      title: '',
      body: '',
      recentPosts: {}
    }
  },

  watch: {
    '$route' (to, from) {
      this.loading = true
      var page = this.cE('page')[0]
      this.fetchSinglePost(response => {
        page.scrollTop = 0
        this.loading = false
      })
    }
  },

  computed: {
    postPath: function () {
      var path = 'http://www.facebook.com/share.php?u=http://displacedseries.com/#' + this.$route.fullPath
      return path
    }
  },

  created () {
    this.loading = true
    this.fetchSinglePost(response => {
      this.backgroundImg = response.acf.background_image.url
      this.abstract = response.acf.abstract
      this.title = response.title.rendered
      this.body = response.content.rendered
      this.loading = false
    })
    this.fetchRecentPosts(response => {
      this.recentPosts = response
    })
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
























<!--  -->
