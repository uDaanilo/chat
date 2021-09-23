<template>
  <div class="alert my-5 px-2 d-flex justify-center">
    <v-alert
      v-show="$store.state.alert.show"
      border="left"
      max-width="800"
      :color="$store.state.alert.color"
      :type="$store.state.alert.type"
      :dismissible="$store.state.alert.dismissable"
      transition="slide-y-transition"
    >
      {{ $store.state.alert.message }}
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'Alert'
}
</script>

<style>
  .alert {
    width: 100%;
    z-index: 10;
    position: fixed;
  }
</style>