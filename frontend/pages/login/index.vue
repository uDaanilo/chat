<template>
  <div @keydown.enter="signin" class="login">
    <v-card class="">
      <v-card-text>
        <v-icon>mdi-account</v-icon> Login
        <v-text-field
          label="Email"
          color="accent"
          type="email"
          v-model="email"
          @keydown.enter="signin"
        ></v-text-field>
        <v-text-field
          label="Password"
          color="accent"
          type="password"
          v-model="password"
          @keydown.enter="signin"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <router-link to="/register">
          <v-btn text color="accent">
            <v-icon>mdi-account-plus</v-icon> Criar conta
          </v-btn>
        </router-link>
        <v-btn @click="signin" text color="accent">
          <v-icon>mdi-login</v-icon> Entrar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: "Login",
  data: () => {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signin(){
      if(!this.email || !this.password) return alert("Preencha o formulario")

      this.$axios.post('/login', { email: this.email, password: this.password })
        .then(res => {
          const { user, token } = res.data
          this.$store.commit('user/set', { name: user.name, email: user.email, img: user.img })

          localStorage.setItem('token', JSON.stringify(token))

          this.$socket.client.auth = { token }
          this.$socket.client.connect()

          this.$router.push('/chat')
        })
        .catch(alert)
    }
  },
  created(){
    if(this.$store.state.user.name) return this.$router.push('/chat')
  }
})
</script>

<style>
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
</style>