<template>
  <div class="page page-about">

    <div v-if="introBlurb" class="grid">
      <div class="col">
        <div class="intro-blurb" v-html="introBlurb"></div>
      </div>
    </div>

    <div class="grid">

      <PersonTile
        v-for="(person, index) in teamMembers"
        :key="person.name + '-' + index"
        :person="person" />

    </div>

  </div>
</template>

<script>
import PersonTile from '@/components/PersonTile'

export default {
  components: {
    PersonTile
  },

  props: {
    page: {
      type: Object,
      required: true
    }
  },

  computed: {
    introBlurb () {
      const text = this.page.metadata.intro_blurb
      if (text !== '') { return text }
      return false
    },
    teamMembers () {
      const people = this.page.metadata.team_member
      if (people.length > 0) { return people }
      return false
    }
  },

  mounted () {
    console.log(this.page)
  }
}
</script>

<style lang="scss" scoped>
.intro-blurb {
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @include small {
    text-align: center;
  }
}
</style>
