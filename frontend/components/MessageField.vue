<template>
  <div @keydown.enter="sendMessage" class="message-field mb-3 px-4">
    <v-badge offset-x="15" avatar offset-y="10" dot bottom :color="$socket.connected ? 'green' : 'red'">
      <v-avatar size="48" class="pointer mr-3">
        <img :src="$store.state.user.img" :alt="`${$store.state.user.name} pfp`" :title="$store.state.user.name">
      </v-avatar>
    </v-badge>

    <v-text-field 
      autocomplete='off'
      class="message-field__input"
      color="accent"
      :disabled="!$socket.connected"
      v-model="message"
      label="Digite..."
      solo
    >
      <template v-slot:append>
        <v-btn icon large>
          <v-icon>mdi-file-image</v-icon>
        </v-btn>
        <v-btn @click="logout" icon large>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </template>
    </v-text-field>
    
  </div>
</template>
<script>
export default {
  name: "Message_field",
  data(){
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {
      this.$socket.client.emit('message', this.message)
      this.message = ''

      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100)
    },
    logout() {
      localStorage.removeItem('token')
      this.$store.commit('user/clear')
      this.$socket.client.auth = {}

      this.$router.push('/login')
    }
  }
}
</script>
<style>
  .message-field {
    display: flex;
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0;
  }
</style>