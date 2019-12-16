<template>
  <div class="container page-error">

    <div class="top-panel">
      <div class="grid">
        <div class="col">
          <Header />
        </div>
      </div>
    </div>

    <div class="grid-center">
      <div class="col-6_sm-12">
        <h3>Hmm, either something went wrong with the site or we can't find what you're looking for. Try again in a bit or click on the logo to go back to the Home Page!</h3>
      </div>
    </div>

    <RecentPosts
      v-if="recentPosts"
      :post-list="recentPosts" />

    <PageFooter />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CloneDeep from 'lodash/cloneDeep'

import Header from '@/components/Header'
import RecentPosts from '@/components/RecentPosts'
import PageFooter from '@/components/PageFooter'

export default {
  components: {
    Header,
    RecentPosts,
    PageFooter
  },

  computed: {
    ...mapGetters({
      postList: 'posts/postList'
    }),
    recentPosts () {
      const postList = CloneDeep(this.postList)
      if (postList) {
        postList.length = 3
        if (postList.length > 0) { return postList }
        return false
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.top-panel {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 38.2vh;
  margin-bottom: 2rem;
  position: relative;
  @include small {
    height: 61.8vh;
  }
}

h3 {
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 2rem;
}
</style>
