<template>
  <nav v-if="mainMenu" class="menu-items">

    <nuxt-link
      v-for="item in mainMenu"
      :key="item.ID"
      class="menu-item"
      :to="item.permalink">

      {{ item.title }}

    </nuxt-link>

  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      navigationList: 'navigation/navigationList',
      siteOptions: 'global/siteOptions'
    }),
    mainMenu () {
      return this.$getMenu('Main Site Menu')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
