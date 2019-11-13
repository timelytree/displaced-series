<template>
  <div class="page page-home">

    <div class="top-panel">
      <div class="grid">
        <div class="col">
          <Loader v-if="loading" />
          <Header v-if="!loading" />
        </div>
      </div>
    </div>

    <div v-if="!loading" class="container">
      <div class="grid">
        <PostTile
          v-for="post in postList"
          :key="post.id"
          :post="post"
          class="col-4_ti-12_mi-6"
          @postTileMounted="postTileMounted" />
      </div>
    </div>

    <PageFooter
      v-if="!loading"
      :recent-posts="recentPosts" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CloneDeep from 'lodash/cloneDeep'
import Api from '@/api'

import Loader from '@/components/Loader'
import Header from '@/components/Header'
import PostTile from '@/components/PostTile'
import PageFooter from '@/components/PageFooter'

function activatePostTiles (count) {
  const postElements = document.querySelectorAll('.post-tile')
  let num1 = 0
  let num2 = 150
  const interval = setInterval(() => {
    if (num1 < count) {
      postElements[num1].classList.add('active')
      num1 += 1
      num2 += 25
    } else {
      clearInterval(interval)
    }
  }, num2)
}

export default {
  components: {
    Loader,
    Header,
    PostTile,
    PageFooter
  },

  data () {
    return {
      loading: true,
      postTileCount: 0,
      postTilesMounted: []
    }
  },

  computed: {
    ...mapGetters({
      postList: 'posts/postList'
    }),
    recentPosts () {
      const postList = CloneDeep(this.postList)
      if (postList) {
        postList.length = 3
        return postList
      }
      return false
    }
  },

  watch: {
    postTilesMounted () {
      const count = this.postTileCount
      if (this.postTilesMounted.length === count) {
        activatePostTiles(count)
      }
    }
  },

  async fetch ({ store, params }) {
    const navigationList = await Api.getNavigationList()
    const siteOptions = await Api.getSiteOptions()
    const postList = await Api.getAllCptPosts('post')
    store.dispatch('navigation/setNavigationList', navigationList)
    store.dispatch('global/setSiteOptions', siteOptions)
    store.dispatch('posts/setPostList', postList.posts)
  },

  mounted () {
    const postList = this.postList
    if (Object.keys(postList).length > 0) {
      this.loading = false
      this.postTileCount = postList.length
    }
  },

  methods: {
    postTileMounted (postID) {
      this.postTilesMounted.push(postID)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
</style>

<style lang="scss" scoped>
.page-home {
  padding-top: 0;
}

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
</style>
