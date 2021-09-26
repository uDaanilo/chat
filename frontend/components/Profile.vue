<template>
  <div @click.stop v-show="$store.state.profile.show" @client.prevent.stop class="profile" :style='`left: ${$store.state.profile.x}px; top: ${$store.state.profile.y}px`'>
    <v-slide-y-transition>
      <v-card class="mx-auto" elevation="3">
      <v-card-text class="d-flex justify-end align-center">
        <h3 class="pl-5 pr-2">{{ $store.state.profile.user.name }}</h3>
        <v-avatar>
          <v-img :src="$store.state.profile.user.img"></v-img>
        </v-avatar>
      </v-card-text>

      <v-card-actions class="d-flex justify-center">

        <router-link :to="`/chat/${$store.state.profile.user.id}`">
          <v-btn outlined rounded text color="accent">
            enviar mensagem
          </v-btn>
        </router-link>

      </v-card-actions>
    </v-card>
    </v-slide-y-transition>
  </div>
</template>

<script>
export default {
  name: "Profile",
  mounted() {
    document.body.addEventListener('click', e => {
      e.stopPropagation()

      this.$store.commit('profile/hide')
    })
  }
}
</script>

<style>
  .profile {
    z-index: 100;
    position: absolute;
  }
  .profile h3 {
    color: white;
    font-weight: normal;
  }
</style>