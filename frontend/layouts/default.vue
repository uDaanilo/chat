<template>
  <v-app dark>
    <v-main>
      <Alert />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: 0;
  }
  body {
    width: 100%;
    height: 100vh;
  }
  ::-webkit-scrollbar-track {
   background-color: #131313;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
    background: #414141;
  }
</style>