<template>
  <div class="page" id="postPAGE">
    <Navigation v-bind:loading="loading" />

    <transition name="loading">
      <div class="container loading" v-if="postLoading" v-bind:class="{ active: postLoading }">
        <Loading id="loading" />
      </div>
    </transition>

    <transition name="body">
      <div class="content" v-if="!postLoading">
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
          <div class="post-tile-list" v-if="!recentPostsLoading">
            <PostTile v-for="post in recentPosts" v-bind:post="post" :key="post.id" class="active" />
          </div>
        </div>

        <PageFooter v-bind:recentPosts="recentPosts"/>
      </div>
    </transition>


  </div>
</template>

<script>
import methods from '../store/methods.js'
// import Store from '../store/Store.js'
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
      loading: null,
      postLoading: null,
      recentPostsLoading: null,
      backgroundImg: '',
      abstract: '',
      title: '',
      body: '',
      recentPosts: {}
    }
  },

  watch: {
    '$route' (to, from) {
      this.postLoading = true
      this.showMenu(() => {}, false)
      var page = this.cE('page')[0]
      var postId = to.query.id
      this.fetchSinglePost(response => {
        this.backgroundImg = response.acf.background_image.url
        this.abstract = response.acf.abstract
        this.title = response.title.rendered
        this.body = response.content.rendered
        var timeout = setTimeout(() => {
          this.postLoading = false
          page.scrollTop = 0
          clearTimeout(timeout)
        }, 300)
      }, postId)
    }
  },

  computed: {
    postPath: function () {
      var path = 'http://www.facebook.com/share.php?u=http://displacedseries.com/#' + this.$route.fullPath
      return path
    }
  },

  created () {
    var postId = this.$route.query.id
    this.loading = true
    this.postLoading = true
    this.recentPostsLoading = true
    this.fetchSinglePost(response => {
      this.backgroundImg = response.acf.background_image.url
      this.abstract = response.acf.abstract
      this.title = response.title.rendered
      this.body = response.content.rendered
      var timeout = setTimeout(() => {
        this.loading = false
        this.postLoading = false
        clearTimeout(timeout)
      }, 300)
    }, postId)
    this.fetchRecentPosts(response => {
      this.recentPosts = response
      this.recentPostsLoading = false
    })
  }
}
</script>

<style lang="scss">
.body-enter-active, .body-leave-active {
  transform: translateY(0);
  opacity: 1;
  transition: 150ms;
}
.body-enter, .body-leave-to {
  opacity: 0;
  transform: translateY(25px);
}

.loading-enter-active {
  opacity: 1;
  transition: 150ms;
  transition-delay: 450ms;
}
.loading-enter, .loading-leave-to {
  opacity: 0;
}
.loading-leave-active {
  transition-delay: 0;
  transition: 0;
  opacity: 0;
}
</style>
























<!--  -->
