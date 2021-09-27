<template>
  <section class="chat">
    <Profile />
    <Messages :loading="loadingMessages" :messages="messages" />
    <Online-users />
    <MessageField />
  </section>
</template>

<script>

export default {
  middleware: 'auth',
  data: () => ({
    messages: [],
    loadingMessages: true
  }),
  sockets: {
    already_connected() {
      this.$store.dispatch('alert/set', { message: 'Sua conta está conectada em outro lugar', color: 'accent', time: Infinity, dismissable: false })
    },
    message(msg) {
      this.verifyContentIsAImage(msg)

      this.messages.push(msg)
    },
    connect_error(err) {
      console.error(err)
    }
  },
  methods: {
    verifyContentIsAImage(msg) {
      if(/^(http|https):\/\/[^ "]+$/.test(msg.content) && /\.(png|jpg|jpeg|gif|webp)/g.test(msg.content)) {
        msg.img = msg.content

        this.$nextTick(() => {
          this.messages = this.messages.map(el => {
            if(el.id == msg.id) 
              return msg

            return el
          })
        })
      }
    },
    getMessages() {
      this.$axios('/message')
        .then(res => {
          const messages = res.data
          
          this.messages = messages

          this.messages.forEach((msg) => this.verifyContentIsAImage(msg))

          this.loadingMessages = false
        })
    }
  },
  created() {
    this.getMessages()
  }
}
</script>

<style>
  .chat {
    display: grid;
    grid-template-columns: calc(100% - 75px) 75px;
    grid-template-areas: 
      'messages online-users'
    ;
    position: relative;
  }

  @media screen and (max-width: 960px) {
    .chat {
      grid-template-columns: 100% 0;
    }
  }
</style>