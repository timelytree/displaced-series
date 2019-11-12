<template>
  <div
    v-if="instagramUrl || facebookUrl || youtubeUrl"
    class="social-icons">

    <a
      v-if="instagramUrl"
      id="igLogo"
      :href="instagramUrl"
      target="_blank">
      <img src="../assets/images/instagram_icon_black.svg" />
    </a>

    <a
      v-if="facebookUrl"
      id="fbLogo"
      :href="facebookUrl"
      target="_blank">
      <img src="../assets/images/facebook_icon_black.svg" />
    </a>

    <a
      v-if="youtubeUrl"
      id="ytLogo"
      :href="youtubeUrl"
      target="_blank">
      <img src="../assets/images/youtube_icon_black.svg" />
    </a>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      siteOptions: 'global/siteOptions'
    }),
    instagramUrl () {
      const url = this.siteOptions.instagram_url
      if (url !== '') { return url }
      return false
    },
    facebookUrl () {
      const url = this.siteOptions.facebook_url
      if (url !== '') { return url }
      return false
    },
    youtubeUrl () {
      const url = this.siteOptions.youtube_url
      if (url !== '') { return url }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.social-icons {
  @include display-flex;
  @include flex-row;
  @include flex-middle;
  a {
    float: left;
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
  }

  #igLogo, #fbLogo, #ytLogo {
    position: relative;
  }

  #igLogo {
    img {
      width: 30px;
    }
  }

  #fbLogo {
    img {
      width: 28px;
    }
  }

  #ytLogo {
    img {
      width: 30px;
    }
  }
}
</style>
