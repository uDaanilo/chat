<template>
  <div @keydown.enter="sendMessage" class="message-field mb-3 px-4">
    <input @change="sendImage" accept=".png, .jpg, .jpeg, .gif, .webp" type="file" ref="inputMessageField" id="inputMessageField" style="display: none">

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
        <v-btn color="accent" :loading="imageUploadLoading" @click="$refs.inputMessageField.click()" icon large>
          <v-icon>mdi-file-image</v-icon>
        </v-btn>

        <v-btn color="accent" @click="logout" icon large>
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
      message: '',
      imageUploadLoading: false
    }
  },
  methods: {
    sendMessage() {
      this.$socket.client.emit('message', this.message)
      this.message = ''
    },
    logout() {
      localStorage.removeItem('token')
      this.$store.commit('user/clear')
      this.$socket.client.auth = {}
      this.$socket.client.disconnect()

      this.$router.push('/login')
    },
    sendImage(e) {
      if(!e.target.files[0] || e.target.files[0].type.search('image') == -1) return

      const form = new FormData()
      form.append('img', e.target.files[0])

      this.imageUploadLoading = true
      this.$axios.$post('/message/image', form, { timeout: 10000 })
        .then(res => {
          this.imageUploadLoading = false
          this.$socket.client.emit('message', res.src)
        })
        .catch(() => this.imageUploadLoading = false)
    }
  }
}
</script>
<style>
  .message-field {
    grid-area: messages;
    display: flex;
    position: fixed;
    width: 96%;
    height: 50px;
    bottom: 0;
  }
</style>