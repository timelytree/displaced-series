<template>
  <div class="page" id="homePAGE">
    <div class="topPANEL">
      <div class="home-page-menu container" v-if="loading" v-bind:class="{ active: loading }">
        <Loading id="loading"  />
      </div>
      <div class="home-page-menu container" v-if="!loading" v-bind:class="{ active: !loading }">
        <Logo id="logo" />
        <SocialIcons />
      </div>
    </div>

    <div class="container post-tile-list" v-if="!loading">
      <PostTile v-for="post in posts" v-bind:post="post" :key="post.id" />
    </div>

    <PageFooter v-bind:recentPosts="recentPosts" v-if="!loading" />
  </div>
</template>

<script>
import methods from '../store/methods.js'
import Loading from '../assets/images/loading.vue'
import Logo from '../assets/images/logo.vue'
import PostTile from './PostTile.vue'
import PageFooter from './PageFooter.vue'
import SocialIcons from './SocialIcons.vue'

export default {
  name: 'PageHome',

  components: {
    Loading,
    Logo,
    SocialIcons,
    PostTile,
    PageFooter
  },

  methods: methods,

  data () {
    return {
      loading: true,
      posts: {}
    }
  },

  metaInfo () {
    return {
      title: 'Displaced | An Original Documentary Series',
      titleTemplate: null,
      meta: [
        { name: 'description', content: 'An original documentary series that delves into the wild, beautifully chaotic lives of modern refugees.' }
      ]
    }
  },

  computed: {
    recentPosts: function () {
      var posts = []
      Object.keys(this.posts).map(key => {
        if (key < 3) {
          posts.push(this.posts[key])
        }
      })
      return posts
    }
  },

  created () {
    this.fetchAllPosts(response => {
      this.posts = response
      this.loading = false
      var posts = this.cE('post-tile')
      var num1 = 0
      var num2 = 150
      var interval = setInterval(() => {
        if (num1 < 5) {
          this.addC(posts[num1], 'active')
          num1 += 1
          num2 += 25
        } else {
          clearInterval(interval)
        }
      }, num2)
    })
  }
}
</script>


























<!--  -->
