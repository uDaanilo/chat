<template>
  <div class="messages">
    <Loading v-if="loading" />
    <div v-show="!loading" v-for="msg in messages" :key="msg.id" class="message">
      <div class="author-img">
        <v-avatar>
          <v-img :src="msg.author.img"></v-img>
        </v-avatar>
      </div>

      <div class="message-content ml-3">
        <h4>{{ msg.author.name }} <small>{{ $dayjs(msg.createdAt).fromNow() }}</small></h4>
        <p v-if="!msg.img">{{ msg.content }}</p>
        <img
          id="message-image"
          class="mt-1 mb-3"
          v-if="msg.img"
          :src="msg.img"
        />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Messages",
  props: ["messages", "loading"],
  middleware: 'auth',
  data: () => ({
  }),
  methods: {
    scrollOnMessage() {
      const messagesDiv = document.querySelector('.messages')
      const observer = new MutationObserver(() => {
        messagesDiv.scrollTo(0, messagesDiv.scrollHeight)
      })

      messagesDiv.addEventListener('scroll', () => {
        if((messagesDiv.clientHeight + messagesDiv.scrollTop) >= (messagesDiv.scrollHeight - 300))
          observer.observe(messagesDiv, { childList: true, subtree: true })
        else
          observer.disconnect()
      })
    }
  },
  mounted() {
    this.scrollOnMessage()
  },
  watch: {
    loading() {
      setTimeout(() => document.querySelector('.messages').scrollTo(0, document.querySelector('.messages').scrollHeight), 500)
    }
  }
}
</script>

<style>
  .messages {
    grid-area: messages;
    overflow-y: auto;
    height: 95%;
    padding-bottom: 25px;
  }
  .messages .message {
    display: flex;
    width: 100%;
    padding: 0.3% 1%;
  }

  .messages .message:hover {
    background-color: #1e1e1e;
  }

  .messages .message .message-content {
    margin: 0 0.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .messages .message .message-content small {
    color: gray;
    font-weight: normal;
  }
  .messages .message .message-content p {
    color: lightgray;
    word-break: break-all;
  }
  .message #message-image {
    max-width: 50%;
    width: auto;
    height: 100%;
  }
</style>