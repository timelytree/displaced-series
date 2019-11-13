<template>
  <header id="header">

    <div class="panel-left">
      <nuxt-link to="/" class="logo-link">
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
  @include small {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
}

.panel-left {
  display: flex;
  flex-direction: row;
  @include small {
    flex-direction: column;
  }
  @include tiny {
    width: calc(100% - 2rem);
  }
}

.logo-link {
  margin-right: 1.5rem;
  @include small {
    text-align: center;
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}

#subtitle {
  font-size: 1.25rem;
  line-height: 1.1875rem;
  font-weight: 600;
  font-family: $fontRobotoCondensed;
  text-transform: uppercase;
  @include small {
    text-align: center;
    br {
      display: none;
    }
  }
}
</style>
