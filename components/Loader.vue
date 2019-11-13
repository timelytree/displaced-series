<template>
  <svg id="loader-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 848.8 207">
    <path id="character1" class="character" d="M0,203.7V3.2h28.9v172.1H75v28.5H0z" />
    <path id="character2" class="character" d="M204.9,164.8c0,28.1-13.9,42.2-41.6,42.2c-27.7,0-41.5-14.1-41.5-42.2V42.1C121.8,14,135.6,0,163.3,0 c27.7,0,41.6,14,41.6,42.1V164.8z M176,42.1c0-9-4.2-13.5-12.6-13.6h-0.2c-8.3,0-12.5,4.5-12.5,13.6v122.7c0,9.1,4.2,13.6,12.6,13.6 c8.5,0,12.7-4.5,12.7-13.6V42.1z" />
    <path id="character3" class="character" d="M341.5,132.6l9.4,71.2h-29.2l-5.6-42.5h-29.5l-5.7,42.5h-29.1l9.4-70.8L281.5,3.2h39.7L341.5,132.6z M312.3,132.6l-11-83.4 l-11,83.4H312.3z" />
    <path id="character4" class="character" d="M399.7,3.2h44.6c25.7,0.1,38.5,14.1,38.5,42.2v116.2c0,28-13.5,42.1-40.4,42.1h-42.7V3.2z M428.6,31.7v143.5h12.7 c8.4,0,12.6-4.5,12.6-13.6V45.4c0-9.1-4.2-13.7-12.6-13.7H428.6z" />
    <path id="character5" class="character" d="M539.2,3.2h28.9v200.6h-28.9V3.2z" />
    <path id="character6" class="character" d="M626.7,3.2h28.9L683,119.5V3.2h26.8v200.6h-28.9L654.5,91.1v112.7h-27.8V3.2z" />
    <path id="character7" class="character" d="M848.8,164.8c0,28.1-13.9,42.2-41.6,42.2c-27.7,0-41.5-14.1-41.5-42.2V42.1C765.7,14,779.6,0,807.2,0 c27.7,0,41.6,14,41.6,42.1v27h-28.9v-27c0-9-4.2-13.5-12.6-13.6h-0.2c-8.3,0-12.5,4.5-12.5,13.6v122.7c0,9.1,4.2,13.6,12.6,13.6 c8.5,0,12.7-4.5,12.7-13.6v-47h-12.6V89.1h41.5V164.8z" />
  </svg>
</template>

<style lang="scss" scoped>
@include keyframes(loading) {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

#loader-svg {
  height: 5rem;
  @include small {
    height: 3rem;
  }
}

.character {
  @include animation('loading 1000ms infinite');
  @for $i from 1 to 8 {
    &:nth-child(#{$i}) {
      @include animationDelay($i * 75ms !important);
    }
  }
}
</style>
