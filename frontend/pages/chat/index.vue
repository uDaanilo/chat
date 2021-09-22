<template>
  <section class="chat">
    <Messages :messages="messages" />
    <MessageField />
  </section>
</template>

<script>

export default {
  middleware: 'auth',
  data: () => ({
    messages: [],
    connectedUsers: []
  }),
  sockets: {
    connected_users(connectedUsers) {
      connectedUsers = connectedUsers.sort((a, b) => {
        if(a.socketId == this.$socket.client.id) return -1

        return 0
      })

      this.connectedUsers = connectedUsers

      console.log(connectedUsers)
    },
    already_connected() {
      alert('Sua conta esta conectada em outro navegador')
    }
  },
  mounted() {
    window.scrollTo(0, document.body.scrollHeight)
  },
  created() {
    this.$axios('/message')
      .then(res => {
        const messages = res.data
        this.messages = messages
        
        setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100)
      })
  }
}
</script>

<style>
  .chat {
   margin-bottom: 75px;
  }
</style>