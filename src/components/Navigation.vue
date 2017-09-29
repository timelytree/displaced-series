<template>
  <transition name="nav">
    <nav id="nav" v-if="!loading">
      <router-link to="/"><Logo id="logo" /></router-link>
      <div id="menuB" v-on:click="showMenu = !showMenu">MENU</div>
      <div id="menuOverlay" class="container" v-bind:class="{active: showMenu}" :style="{ 'background-image': 'url(' + menuOverlayBackgroundImg + ')' }">
        <div id="blackOverlay"></div>
        <ul class="menu-links">
          <li><router-link to="/" class="top-link">Home</router-link></li>
          <li><router-link to="/about" class="top-link">About</router-link></li>
          <li>
            <h3 class="top-heading">Recent Posts</h3>
            <ul>
              <li v-for="post in recentPosts">
                <router-link class="inner-link" :to="{ name: 'PagePost', params: { slug: post.slug }, query: { id: post.id } }" :key="post.id">{{ post.title.rendered }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<script>
import methods from '../functions/methods.js'
import Logo from '../assets/images/logo.vue'

export default {
  name: 'Navigation',

  components: {
    Logo
  },

  props: ['loading'],

  methods: methods,

  data () {
    return {
      showMenu: false,
      menuOverlayBackgroundImg: '',
      recentPosts: ''
    }
  },

  watch: {
    '$route' (to, from) {
      if ((this.showMenu) && (this.loading)) {
        this.showMenu = false
      }
    }
  },

  created () {
    this.fetchRecentPosts(response => {
      this.recentPosts = response
    })
  }
}
</script>

<style lang="scss">
@import '../stylesheets/base/variables.scss';

.nav-enter-active, .nav-leave-active {
  transition: 500ms;
  @include transform(translateY(0));
}
.nav-enter, .nav-leave-to {
  @include transform(translateY(-100px));
}
</style>

















<!--  -->
