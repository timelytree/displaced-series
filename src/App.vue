<template>
  <div class="wrapper" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Displaced | An Original Documentary Series'
  }
}
</script>

<style lang="scss">

</style>
