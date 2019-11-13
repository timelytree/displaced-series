<template>
  <div class="person-tile col-3_ti-12_sm-6">

    <img class="profile-img" :src="image" />

    <h3 class="name">
      {{ name }}
    </h3>

    <div class="title">
      {{ title }}
    </div>

    <a :href="profileLinkUrl">
      {{ profileLinkText }}
    </a>

  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true
    }
  },

  computed: {
    image () {
      return this.person.image
    },
    name () {
      return this.person.name
    },
    title () {
      return this.person.title
    },
    profileLinkText () {
      return this.person.profile_link.text
    },
    profileLinkUrl () {
      return this.person.profile_link.url
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-img {
  width: 100%;
  margin-bottom: 1rem;
}

.name,
.title {
  margin-bottom: 0.5rem;
}

.title {
  font-weight: 600;
}
</style>
