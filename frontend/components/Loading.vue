<template>
  <div class="loading d-flex justify-center align-center">
    <v-progress-circular class="d-flex justify-center align-center" indeterminate color="accent" size="50" />
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style>
  .loading {
    height: 100%;
  }
</style>