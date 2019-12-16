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
          v-for="post in truncatedPostList"
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
  head () {
    const self = this
    return {
      title: 'Displaced | ' + self.seoTitle,
      meta: [{
        hid: 'description',
        name: 'description',
        content: self.seoDescription
      }]
    }
  },

  components: {
    Loader,
    Header,
    PostTile,
    PageFooter
  },

  data () {
    return {
      loading: true,
      page: false,
      postTileCount: 0,
      postTilesMounted: []
    }
  },

  computed: {
    ...mapGetters({
      siteOptions: 'global/siteOptions',
      postList: 'posts/postList'
    }),
    seoImage () {
      const globalImage = this.siteOptions.seo_global_image
      const pageImage = this.page.metadata.seo_page_image
      let image = ''
      if (globalImage) { image = globalImage }
      if (pageImage) { image = pageImage }
      return image
    },
    seoTitle () {
      const pageSeoTitle = this.page.metadata.seo_page_title
      const pageTitle = this.page.post_title
      let title = pageTitle
      if (pageSeoTitle && pageSeoTitle !== '') { title = pageSeoTitle }
      return title
    },
    seoDescription () {
      const globalSeoDescription = this.siteOptions.seo_global_description
      const pageSeoDescription = this.page.metadata.seo_page_description
      let description = ''
      if (globalSeoDescription && globalSeoDescription !== '') { description = globalSeoDescription }
      if (pageSeoDescription && pageSeoDescription !== '') { description = pageSeoDescription }
      return description
    },
    truncatedPostList () {
      const postList = CloneDeep(this.postList)
      const page = this.page
      const listType = page.metadata.number_of_posts.all_vs_limited
      const postsToShow = page.metadata.number_of_posts.number_of_posts
      if (postList.length > 0) {
        if (listType === 'limited') {
          postList.length = postsToShow
          return postList
        }
        return postList
      }
      return false
    },
    recentPosts () {
      const postList = CloneDeep(this.postList)
      if (postList.length > 0) {
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

  async asyncData ({ params, error }) {
    const page = await Api.getSinglePage('home')
    return { page }
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
    const truncatedPostList = this.truncatedPostList
    if (Object.keys(truncatedPostList).length > 0) {
      this.loading = false
      this.postTileCount = truncatedPostList.length
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
