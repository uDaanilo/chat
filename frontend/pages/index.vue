<template>
  <section class="main d-flex justify-center align-center">
    <v-progress-circular class="d-flex justify-center align-center" indeterminate color="accent" size="50" />
  </section>
</template>

<script>
export default {
  name: "Home",
  middleware: 'auth',
  mounted() {
    this.$router.push('/chat')
  }
}
</script>

<style>
  .main {
    width: 100%;
    height: 100vh;
  }
</style>