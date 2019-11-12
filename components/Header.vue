<template>
  <header id="header">

    <div class="panel-left">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
      <h1 id="subtitle">
        An <br />Original <br />Documentary <br />Series
      </h1>
    </div>

    <SocialIcons />

  </header>
</template>

<script>
import Logo from '@/components/Logo'
import SocialIcons from '@/components/SocialIcons'

export default {
  components: {
    Logo,
    SocialIcons
  }
}
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6.25rem;
  width: 100%;
  background-color: white;
}

.panel-left {
  display: flex;
  flex-direction: row;
}

#subtitle {
  font-size: 1.25rem;
  line-height: 1.1875rem;
  font-weight: 600;
  font-family: $fontRobotoCondensed;
  text-transform: uppercase;
}
</style>
