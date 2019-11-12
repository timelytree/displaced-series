<template>
  <div class="social-icons">
    <a id="igLogo" href="https://www.instagram.com/displacedseries" target="_blank"><img src="../assets/images/instagram_icon_black.svg" /></a>
    <a id="fbLogo" href="https://www.facebook.com/displacedseries" target="_blank"><img src="../assets/images/facebook_icon_black.svg" /></a>
    <a id="ytLogo" href="https://www.youtube.com/channel/UCSby_9cMuq2nMgONdel8k3A" target="_blank"><img src="../assets/images/youtube_icon_black.svg" /></a>
  </div>
</template>

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
