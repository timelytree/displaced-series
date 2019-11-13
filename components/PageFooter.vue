<template>
  <footer id="footer" class="grid">
    <div class="col">
      <div class="footer-content">

        <div class="footer-panel left-panel">
          <nuxt-link
            v-for="item in footerMenuItems"
            :key="item.ID"
            :to="item.slug === 'home' ? '/' : ('/' + item.slug)"
            class="top-link">
            {{ item.title }}
          </nuxt-link>
        </div>

        <div class="footer-panel middle-panel">
          <SocialIcons />
          <a id="moog-logo-footer" href="https://www.moogmedia.ca" target="_blank">
            A <img src="~/assets/images/moog-logo.svg" /> production
          </a>
        </div>

        <div class="footer-panel right-panel">
          <h3 class="top-heading">
            Recent Posts
          </h3>
          <ul class="footer-posts-list">
            <li
              v-for="post in recentPosts"
              :key="post.ID">
              <nuxt-link class="inner-link" :to="post.slug">
                {{ post.post_title }}
              </nuxt-link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
import SocialIcons from '@/components/SocialIcons'

export default {
  components: {
    SocialIcons
  },

  props: {
    recentPosts: {
      type: Array,
      required: true
    }
  },

  computed: {
    footerMenu () {
      return this.$getMenu('Footer Menu')
    },
    footerMenuItems () {
      const items = this.footerMenu.items
      if (items.length > 0) { return items }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-content {
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  padding: 2rem 0;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 0.125rem;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
  }
}

.footer-panel {
  width: 33.333%;
  height: 100%;
}

.left-panel, .right-panel {
  .top-link, .top-heading {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
    display: table;
    color: black;
  }
}

.left-panel {
  display: flex;
  flex-direction: column;
}

.middle-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.social-icons {
  margin-bottom: 2rem;
}

#moog-logo-footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: black;
  font-weight: 600;
  text-transform: uppercase;
  img {
    height: 1rem;
    margin: 0 0.625rem;
  }
}

.footer-posts-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  li {
    list-style: none;
    margin: 0;
    .inner-link {
      color: black;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
