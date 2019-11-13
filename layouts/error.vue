<template>
  <div class="container page-error">

    <div class="top-panel">
      <div class="grid">
        <div class="col">
          <Header />
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="col-6_sm-12">
        <h3>Hmm, either something went wrong with the site or we can't find what you're looking for. Try again in a bit or click a link below!</h3>
      </div>
    </div>

    <PageFooter />

  </div>
</template>

<script>
import Header from '@/components/Header'
import PageFooter from '@/components/PageFooter'

export default {
  components: {
    Header,
    PageFooter
  }
}
</script>

<style lang="scss" scoped>
.top-panel {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 38.2vh;
  margin-bottom: 2rem;
  position: relative;
  @include small {
    height: 61.8vh;
  }
}
</style>
