<template>
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1124.2 205.7">
    <path id="character" class="character" d="M0,3.1h45.9c26.7,0.1,40,14.4,40,43.1v113.2c0,28.6-13.9,43-41.7,43H0V3.1z M33.2,34.9v135.9H43 c6.5,0,9.8-3.8,9.8-11.3V46.2c0-7.6-3.3-11.4-9.8-11.4H33.2z" />
    <path id="character1" class="character" d="M141,3.1h33.2v199.4H141L141,3.1L141,3.1z" />
    <path id="character2" class="character" d="M229.1,43c0-28.7,14.3-43,42.9-43c28.7,0,43,14.3,43,43v28.3h-33.2V43c0-7.4-3.3-11.2-9.8-11.3H272 c-6.4,0-9.7,3.8-9.7,11.3v17.7c0,8.1,8.5,18.3,25.5,30.5c18.2,12.9,27.3,28.5,27.3,46.6v24.7c0,28.8-14.3,43.1-42.9,43.1 c-28.7-0.1-43-14.4-43-43.1v-28.3h33.2v28.3c0,7.5,3.3,11.3,9.9,11.3c6.5,0,9.8-3.8,9.8-11.3v-22.3c0-8.8-8.5-19.4-25.5-31.6 c-18.2-12.9-27.3-28.7-27.3-47.3L229.1,43L229.1,43z" />
    <path id="character3" class="character" d="M369.6,3.1h43.5c26.7,0.1,40,14.4,40,43.1v29.4c0,21-9.5,34.7-28.6,40.9c-4.6,1.5-11.2,2.2-19.7,2.2h-2.1 v83.8h-33.2V3.1z M402.8,34.9v52h4c3.6,0,5.9-0.2,7-0.6c4.2-1.7,6.3-5.2,6.3-10.7V46.2c0-7.6-3.3-11.4-9.8-11.4H402.8z" />
    <path id="character4" class="character" d="M504.7,202.5V3.1h33.2v167.6h44.9v31.8L504.7,202.5L504.7,202.5z" />
    <path id="character5" class="character" d="M714.1,131l9.5,71.5h-33.5l-5.5-41.4h-24.4l-5.6,41.4h-33.4l9.5-71.2L651,3.1h43L714.1,131z M680.4,129.2 l-8-60.4l-8,60.4H680.4z" />
    <path id="character6" class="character" d="M855.1,162.5c0,28.7-14.3,43.1-43,43.1c-28.6,0-42.9-14.4-42.9-43.1V43c0-28.7,14.3-43,42.9-43 c28.7,0,43,14.3,43,43v28.3h-33.2V43c0-7.4-3.3-11.2-9.8-11.3H812c-6.4,0-9.7,3.8-9.7,11.3v119.5c0,7.5,3.3,11.3,9.8,11.3 c6.6,0,9.9-3.8,9.9-11.3v-28.3h33.2L855.1,162.5L855.1,162.5z" />
    <path id="character7" class="character" d="M908.6,3.1h78.1v31.8h-44.9v52h38.6v31.9h-38.6v52h44.9v31.8h-78.1L908.6,3.1L908.6,3.1z" />
    <path id="character8" class="character" d="M1038.2,3.1h45.9c26.7,0.1,40,14.4,40,43.1v113.2c0,28.6-13.9,43-41.7,43h-44.2V3.1z M1071.4,34.9v135.9 h9.9c6.5,0,9.8-3.8,9.8-11.3V46.2c0-7.6-3.3-11.4-9.8-11.4H1071.4z" />
  </svg>
</template>

<style lang="scss" scoped>
// @include keyframes(loadingANIM) {
//   0% { opacity: 1; }
//   100% { opacity: 0; }
// }

#logo {
  height: 5rem;
  float: left;
  margin-right: 25px;
  position: relative;
  transition: 150ms;
}

// .home-page-menu, .loading {
//   &.active {
//     #loading, #logo {
//       opacity: 1;
//       @include transform(translateY(0));
//     }
//   }
//
//   #logo, #loading {
//     height: 75px;
//     float: left;
//     margin-right: 25px;
//     position: relative;
//     opacity: 0;
//     transition: 150ms;
//   }
//
//   #loading {
//     @include transform(translateY(-50px));
//     .character {
//       @include animation('loadingANIM 1000ms infinite');
//       @for $i from 1 to 8 {
//         &:nth-child(#{$i}) {
//           @include animationDelay($i * 75ms !important);
//         }
//       }
//     }
//   }
// }
</style>
