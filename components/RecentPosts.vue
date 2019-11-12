<template>
  <div class="grid">
    <div class="col">

      <h2 class="title">
        Recent Posts
      </h2>

      <div v-if="postList" class="grid">
        <PostTile
          v-for="post in postList"
          :key="post.id"
          :post="post"
          class="col-4 active" />
      </div>

    </div>
  </div>
</template>

<script>
import PostTile from '@/components/PostTile'

export default {
  components: {
    PostTile
  },

  props: {
    postList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 5rem;
  margin-bottom: 3rem;
  text-align: center;
}
</style>
