<template>
  <nuxt-link :to="post.slug" class="post-tile">

    <div class="thumbnail" :style="{ 'background-image': 'url(' + thumbnail + ')' }"></div>

    <div class="text">
      <div class="title">
        {{ title }}
      </div>
      <span class="date">
        {{ date }}
      </span>
      <p class="logline">
        {{ logline }}
      </p>
    </div>

  </nuxt-link>
</template>

<script>
export default {
  name: 'PostTile',

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  computed: {
    id () {
      return this.post.ID
    },
    title () {
      return this.post.post_title
    },
    logline () {
      return this.post.metadata.logline
    },
    thumbnail () {
      const thumbnail = this.post.metadata.thumbnail_image
      if (thumbnail) { return thumbnail.sizes['post-thumbnail'] }
      return this.post.featured_image
    },
    date () {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const date = new Date(this.post.post_date)
      const day = date.getDate()
      const month = months[date.getMonth()]
      const year = date.getFullYear()
      return day + ' / ' + month + ' / ' + year
    }
  },

  mounted () {
    this.$emit('postTileMounted', this.post.ID)
  }
}
</script>

<style lang="scss" scoped>
.post-tile {
  position: relative;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(2rem) scale(1);
  transition: 500ms;

  &.active {
    transition: 500ms;
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:hover, &:focus, &:active {
    text-decoration: none;
    transform: scale(0.975);
    .title {
      text-decoration: underline;
    }
    .thumbnail {
      transition: 250ms;
      border-radius: 0.25rem;
    }
  }

  .thumbnail {
    @include centerImage;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    padding-top: 56.25%;
    margin-bottom: 0.25rem;
    border-radius: 0;
    transition: 250ms;
  }

  .title {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .date {
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    color: $gray400;
  }

  .logline {
    margin-top: 2rem;
  }
}
</style>
