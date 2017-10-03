<template>
  <footer id="footer" class="container">
    <div class="footer-panel left-panel">
      <router-link to="/" class="top-link">Home</router-link>
      <router-link to="/about" class="top-link">About</router-link>
      <!-- <a href="/press-kit.zip" class="top-link">Press Kit</a> -->
    </div>

    <div class="footer-panel middle-panel">
      <SocialIcons />
      <a id="logoMOOG" href="https://www.moogmedia.ca">A <img src="../assets/images/logoMOOG.svg" />production</a>
    </div>

    <div class="footer-panel right-panel">
      <h3 class="top-heading">Recent Posts</h3>
      <ul class="footer-posts-list">
        <li v-for="post in recentPosts">
          <router-link class="inner-link" :to="{ name: 'PagePost', params: { slug: post.slug }, query: { id: post.id } }" :key="post.id">{{ post.title.rendered }}</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import methods from '../store/methods.js'
import SocialIcons from './SocialIcons.vue'

export default {
  name: 'PageFooter',

  components: {
    SocialIcons
  },

  methods: methods,

  data () {
    return {
      recentPosts: {}
    }
  },

  created () {
    this.fetchRecentPosts(response => {
      this.recentPosts = response
    })
  }
}
</script>
