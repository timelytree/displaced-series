<template>
  <div class="container">
    <SiteNav />
    <AboutPage
      v-if="page.post_type === 'page' && page.post_template === 'about'"
      :page="page" />
  </div>
</template>

<script>
import Api from '@/api'

import AboutPage from '@/layouts/About'
import SiteNav from '@/components/SiteNav'

export default {
  components: {
    AboutPage,
    SiteNav
  },

  data () {
    return {
      page: null
    }
  },

  async asyncData ({ params, error }) {
    const page = await Api.getSinglePage(params.pathMatch)
    return { page }
  },

  async fetch ({ store, params }) {
    const navigationList = await Api.getNavigationList()
    const siteOptions = await Api.getSiteOptions()
    store.dispatch('navigation/setNavigationList', navigationList)
    store.dispatch('global/setSiteOptions', siteOptions)
  }
}
</script>

<style>
</style>
