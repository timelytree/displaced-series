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

    <div v-if="!loading" :style="{ 'background-image': 'url(' + featuredImage + ')' }" class="banner"></div>

    <div v-if="!loading" class="grid">
      <div class="col-6_sm-10">
        <h1 class="title">
          {{ title }}
        </h1>
        <div class="abstract">
          {{ abstract }}
        </div>
      </div>
    </div>

    <div v-if="!loading" class="content">
      <div v-if="contentBannerItem" :class="[contentBannerAlignment !== 'left' ? 'grid-' + contentBannerAlignment : 'grid']">
        <div :class="'col-' + contentBannerColumns + '_mi-12'">
          <div v-if="contentBannerType === 'image'" class="content-banner-image">
            <img :src="contentBannerItem" />
          </div>
          <div v-if="contentBannerType === 'video'" class="content-banner-video">
            <iframe
              v-if="parsedVideoUrl(contentBannerItem).type === 'youtube'"
              :src="'//www.youtube.com/embed/' + parsedVideoUrl(contentBannerItem).id"></iframe>
            <iframe
              v-if="parsedVideoUrl(contentBannerItem).type === 'vimeo'"
              :src="'//player.vimeo.com/video/' + parsedVideoUrl(contentBannerItem).id"></iframe>
          </div>
        </div>
      </div>
      <div v-if="contentText" class="grid">
        <div class="col-12">
          <div
            class="content-text blog-text-formatting"
            :style="'column-count:' + contentTextColumns + ';'"
            v-html="contentText"></div>
        </div>
      </div>
      <div v-if="contentFooterItem" class="grid">
        <div :class="'col-' + contentFooterColumns + '_mi-12'">
          <div v-if="contentFooterType === 'image'" class="content-banner-image">
            <img :src="contentFooterItem" />
          </div>
          <template v-if="contentFooterType === 'video'">
            <div
              v-for="video in contentFooterItem"
              :key="parsedVideoUrl(video.link).id"
              class="content-banner-video">
              <iframe
                v-if="parsedVideoUrl(video.link).type === 'youtube'"
                :src="'//www.youtube.com/embed/' + parsedVideoUrl(video.link).id"></iframe>
              <iframe
                v-if="parsedVideoUrl(video.link).type === 'vimeo'"
                :src="'//player.vimeo.com/video/' + parsedVideoUrl(video.link).id"></iframe>
            </div>
          </template>
        </div>
      </div>
    </div>

    <RecentPosts
      v-if="recentPosts && !loading"
      :post-list="recentPosts" />

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
import RecentPosts from '@/components/RecentPosts'
import PageFooter from '@/components/PageFooter'

export default {
  components: {
    Loader,
    Header,
    RecentPosts,
    PageFooter
  },

  data () {
    return {
      loading: true,
      post: false
    }
  },

  computed: {
    ...mapGetters({
      postList: 'posts/postList'
    }),
    title () {
      return this.post.post_title
    },
    featuredImage () {
      return this.post.featured_image
    },
    abstract () {
      return this.post.metadata.abstract
    },
    contentBannerType () {
      const image = this.post.metadata.content_banner_image.image
      const video = this.post.metadata.content_banner_image.video
      if (video) { return 'video' }
      if (image) { return 'image' }
      return false
    },
    contentBannerItem () {
      const image = this.post.metadata.content_banner_image.image
      const video = this.post.metadata.content_banner_image.video
      if (video) { return video }
      if (image) { return image }
      return false
    },
    contentBannerColumns () {
      return this.post.metadata.content_banner_image.column_count
    },
    contentBannerAlignment () {
      return this.post.metadata.content_banner_image.alignment
    },
    contentText () {
      const text = this.post.metadata.content_text.text
      if (text && text !== '') { return text }
      return false
    },
    contentTextColumns () {
      return this.post.metadata.content_text.column_count
    },
    contentFooterType () {
      const image = this.post.metadata.content_footer_banner_images_or_videos.image
      const videos = this.post.metadata.content_footer_banner_images_or_videos.videos
      if (videos.length > 0) { return 'video' }
      if (image) { return 'image' }
      return false
    },
    contentFooterItem () {
      const image = this.post.metadata.content_footer_banner_images_or_videos.image
      const videos = this.post.metadata.content_footer_banner_images_or_videos.videos
      if (videos) { return videos }
      if (image) { return image }
      return false
    },
    contentFooterColumns () {
      return this.post.metadata.content_footer_banner_images_or_videos.column_count
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
    return { post }
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
    if (this.post) { this.loading = false }
  },

  methods: {
    parsedVideoUrl (url) {
      return this.$parseVideoUrl(url)
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

.banner {
  @include centerImage;
  width: 100%;
  height: 61.8vh;
  margin-bottom: 3.125rem;
}

.title {
  text-transform: uppercase;
  margin-bottom: 2.5rem;
}

.abstract {
  font-weight: 600;
}

.content {
  margin-top: 2rem;
}

.content-banner-video {
  width: 100%;
  height: auto;
  padding-top: 56.2%;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.content-banner-image {
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
  }
}

.content-text {
  column-gap: 1rem;
  margin-top: 2rem;
  @include small {
    column-count: 2 !important;
  }
  @include small {
    column-count: 1 !important;
  }
}
</style>
