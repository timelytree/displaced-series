<template>
  <div class="container">

    <div class="top-panel">
      <div class="grid">
        <div class="col">
          <Loader v-if="loading" />
          <Header v-if="!loading" />
        </div>
      </div>
    </div>

    <PostSingle
      v-if="post && !loading"
      :post="post"
      :recent-posts="recentPosts" />

    <AboutPage
      v-if="page && page.post_template === 'about' && !loading"
      :page="page" />

    <PageFooter
      v-if="!loading"
      :recent-posts="recentPosts" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CloneDeep from 'lodash/cloneDeep'
import Api from '@/api'

import AboutPage from '@/layouts/AboutPage'
import PostSingle from '@/layouts/PostSingle'

import Loader from '@/components/Loader'
import Header from '@/components/Header'
import PageFooter from '@/components/PageFooter'

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
    AboutPage,
    PostSingle,
    PageFooter
  },

  data () {
    return {
      loading: true,
      post: false,
      page: false
    }
  },

  computed: {
    ...mapGetters({
      siteOptions: 'global/siteOptions',
      postList: 'posts/postList'
    }),
    seoImage () {
      const globalImage = this.siteOptions.seo_global_image
      const pageImage = this.page ? this.page.metadata.seo_page_image : this.post ? this.post.metadata.seo_page_image : ''
      let image = ''
      if (globalImage) { image = globalImage }
      if (pageImage) { image = pageImage }
      return image
    },
    seoTitle () {
      const pageSeoTitle = this.page ? this.page.metadata.seo_page_title : this.post ? this.post.metadata.seo_page_title : ''
      const pageTitle = this.page ? this.page.post_title : this.post ? this.post.post_title : ''
      let title = pageTitle
      if (pageSeoTitle && pageSeoTitle !== '') { title = pageSeoTitle }
      return title
    },
    seoDescription () {
      const globalSeoDescription = this.siteOptions.seo_global_description
      const pageSeoDescription = this.page ? this.page.metadata.seo_page_description : this.post ? this.post.metadata.seo_page_description : ''
      let description = ''
      if (globalSeoDescription && globalSeoDescription !== '') { description = globalSeoDescription }
      if (pageSeoDescription && pageSeoDescription !== '') { description = pageSeoDescription }
      return description
    },
    recentPosts () {
      const postList = CloneDeep(this.postList)
      if (postList) {
        postList.length = 3
        if (postList.length > 0) { return postList }
        return false
      }
      return false
    }
  },

  async asyncData ({ params, error }) {
    const post = await Api.getSinglePost(params.pathMatch)
    if (post.post_type === 'page') {
      return { page: post }
    } else if (post.post_type === 'post') {
      return { post }
    } else {
      console.log('ERROR === PAGE DOES NOT EXIST')
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
    if (this.post || this.page) {
      this.loading = false
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
</style>
