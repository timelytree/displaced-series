# REQUIREMENTS
- The `pages` directory should only contain `index.vue` (Home Page) and `_.vue` (Any and all other pages)
- npm i --save-dev node-sass sass-loader @nuxtjs/style-resources

```js
export default {
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      './assets/vars/*.scss',
      './assets/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
    ]
  }
}
```

# RESOURCES
https://www.toptal.com/vue-js/server-side-rendered-vue-js-using-nuxt-js
https://medium.com/@moustachedesign/creating-a-website-with-nuxt-js-and-wordpress-rest-api-51cf66599cf3
https://medium.com/@fadingdust/review-of-wordpress-and-vue-js-router-edition-de0d0662c0b8
https://github.com/srhise/nuxt-wordpress-pwa
https://www.reddit.com/r/vuejs/comments/anmmlx/handling_a_vue_site_using_wordpress_as_a/

# POTENTIAL DIFFICULTIES
https://nuxtjs.org/guide/routing/#unknown-dynamic-nested-routes

# OTHER
https://stackoverflow.com/questions/34764287/turning-off-eslint-rule-for-a-specific-file

--------------------------------------------------------------------------------

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
