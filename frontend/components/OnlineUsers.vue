<template>
  <div class="online-users align-center elevation-4 d-none d-md-flex">
    <div @click.stop="e => showProfile(e, user)" @contextmenu.prevent="e => showProfile(e, user)" v-for="user in users" :key="user.id"  class="online-user py-5">
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-badge offset-x="15" avatar offset-y="10" dot bottom :color="user.socketId ? 'green' : 'red'">
              <v-avatar size="48" class="pointer mr-3">
                <v-img :src="user.img"></v-img>
              </v-avatar>
            </v-badge>
          </v-btn>
        </template>
        <span>{{ user.name }}</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "Online_users",
  data: () => ({
    users: []
  }),
  sockets: {
    connected_users(connectedUsers) {
      this.users = connectedUsers
      this.sortConnectedUsers()
    }
  },
  methods: {
    showProfile(e, user) {
      let { x, y } = e

      if(e.y > (window.innerHeight - 125)) y = y - 120

      this.$store.commit('profile/show', {
        user,
        x: x - 230,
        y
      })
    },
    sortConnectedUsers() {
      this.users = this.users.sort((a, b) => {
        if(a.socketId == this.$socket.client.id) return -1

        return 0
      })
    }
  },
  created() {
    this.$socket.client.emit('connected_users:get')
  }
}
</script>

<style>
  .online-users {
    grid-area: online-users;
    z-index: 10;
    background-color: #1e1e1e;
    width: 75px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
</style>