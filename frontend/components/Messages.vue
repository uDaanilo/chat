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
        <p v-if="!msg.img">{{ msg.content }}</p>
        <v-img
          class="mt-1"
          v-if="msg.img"
          :src="msg.img"
          max-width="30%"
        />
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
}
</script>

<style>
  .messages {
    margin-bottom: 75px;
    /* height: 10vh; */
    width: 100%;
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
</style>