<template>
  <div class="container">
    <SiteNav />
    <h1>HOME PAGE</h1>
  </div>
</template>

<script>
import SiteNav from '@/components/SiteNav'
import Api from '@/api'

export default {
  components: {
    SiteNav
  },

  async fetch ({ store, params }) {
    const navigationList = await Api.getNavigationList()
    const siteOptions = await Api.getSiteOptions()
    store.dispatch('navigation/setNavigationList', navigationList)
    store.dispatch('global/setSiteOptions', siteOptions)
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
</style>
