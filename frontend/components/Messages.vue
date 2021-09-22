<template>
  <div class="messages">
    <div v-for="msg in messages" :key="msg._id" class="message">
      <div class="author-img">
        <v-avatar>
          <v-img :src="msg.author.img"></v-img>
        </v-avatar>
      </div>

      <div class="message-content">
        <h4>{{ msg.author.name }} <small>{{ $dayjs(msg.createdAt).fromNow() }}</small></h4>
        <p>{{ msg.content }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Messages",
  props: ["messages"],
  middleware: 'auth',
  data: () => ({
  }),
  sockets: {
    message(msg) {
      this.messages.push(msg)

      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100)
    }
  }
}
</script>

<style>
  .chat .message {
    display: flex;
    width: 100%;
    padding: 0.3% 1%;
  }

  .chat .message:hover {
    background-color: #1e1e1e;
  }

  .chat .message .message-content {
    margin: 0 0.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .chat .message .message-content small {
    color: gray;
    font-weight: normal;
  }
  .chat .message .message-content p {
    color: lightgray;
    word-break: break-all;
  }
</style>