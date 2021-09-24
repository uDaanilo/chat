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
      this.$store.dispatch('alert/set', { message: 'Sua conta está conectada em outro lugar', color: 'accent', time: Infinity, dismissable: false })
    },
    async message(msg) {
      this.messages.push(msg)

      const isImg = await this.verifyContentIsAImage(msg).catch(() => {})

      if(isImg)
        setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 200)

    },
    connect_error(err) {
      console.error(err)
    }
  },
  methods: {
    async verifyContentIsAImage(msg) {
      return new Promise((resolve, reject) => {
        if(/^(http|https):\/\/[^ "]+$/.test(msg.content) && /\.(png|jpg|jpeg|gif|webp)/g.test(msg.content)) {
          fetch(msg.content)
            .then(async res => {
              if(res.headers.get('content-type').search('image') !== -1) 
                msg.img = msg.content
  
                this.$nextTick(() => {
                  this.messages = this.messages.map(el => {
                    if(el._id == msg._id) 
                      return msg
  
                    return el
                  })
                })
                resolve(true)
            })
            .catch(reject)
        } else {
          reject(false)
        }
      })
    },
    getMessages() {
      this.$axios('/message')
        .then(res => {
          const messages = res.data
          
          this.messages = messages

          this.messages.map(msg => this.verifyContentIsAImage(msg).catch(() => {}))
        })
    },
    scrollOnMessage() {
      const observer = new MutationObserver(() => {
        window.scrollTo(0, document.body.scrollHeight)
      })

      document.addEventListener('scroll', () => {
        if((document.documentElement.clientHeight + document.documentElement.scrollTop) >= (document.documentElement.scrollHeight - 300))
          observer.observe(document.querySelector('.messages'), { childList: true, subtree: true })
        else
          observer.observe(document.querySelector('.messages'), { childList: true, subtree: false })
      })
    }
  },
  mounted() {
    this.scrollOnMessage()
  },
  created() {
    this.getMessages()
  }
}
</script>

<style>
  .chat {
  }
</style>