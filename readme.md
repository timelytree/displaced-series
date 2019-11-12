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
## Production Setup
- Point domain name to server
- Set up proxy pass
``` bash
location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Build Update
- `git pull origin master`
- `npm run build`
- `pm2 restart displacedseries-nuxt`

## Production Setup
- Adding a remote URL: `git remote add origin git@github.com:timelytree/displaced-series.git`
