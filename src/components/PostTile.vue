<template>
  <router-link class="post-tile"  :to="{ name: 'PagePost', params: { slug: post.slug }, query: { id: post.id } }" :key="post.id">
    <div class="post-tile-thumbnail" :style="{ 'background-image': 'url(' + post.acf.thumbnail_image.url + ')' }"></div>
    <div class="post-tile-text">
      <div class="post-tile-title" v-html="post.title.rendered"></div>
      <span class="post-tile-date">{{ formatDate(post.date).format('DD / MMMM / YYYY') }}</span>
      <p class="post-tile-logline" v-html="post.acf.logline"></p>
    </div>
  </router-link>
</template>

<script>
import methods from '../functions/methods.js'

export default {
  name: 'PostTile',

  props: ['post'],

  methods: methods
}
</script>
