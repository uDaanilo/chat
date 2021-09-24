<template>
  <div @keydown.enter="signin" class="login">
    <v-card style="min-width: 20%" class="">
      <v-card-subtitle>
        <v-icon>mdi-account</v-icon> Login
      </v-card-subtitle>
      
      <v-card-text>
        
        <v-form ref="form" :v-model="valid">
          <v-text-field
            label="Email"
            color="accent"
            type="email"
            v-model="email"
            @keydown.enter="signin"
            required
            :rules="[ rules.required ]"
            :disabled="loading"
          ></v-text-field>

          <v-text-field
            label="Password"
            color="accent"
            type="password"
            v-model="password"
            @keydown.enter="signin"
            required
            :rules="[ rules.required, rules.minLength(password, 8) ]"
            :disabled="loading"
          ></v-text-field>
        </v-form>

      </v-card-text>

      <v-card-actions class="d-flex justify-center">
        <router-link to="/register">
          <v-btn :loading="loading" text color="accent">
            <v-icon>mdi-account-plus</v-icon> Criar conta
          </v-btn>
        </router-link>
        <v-btn :loading="loading" @click="signin" text color="accent">
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
      valid: false,
      loading: false,
      rules: {
        required: val => !!val || 'Este campo deve ser preenchido',
        minLength: (val, length) => val.length >= length || `Este campo deve ter no mínimo ${length} caracteres`
      }
    }
  },
  methods: {
    signin(){
      if(!this.$refs.form.validate())
        return this.$store.dispatch('alert/set', { message: 'Preencha o formulário corretamente', type: 'error' })
      
      this.loading = true
      this.$axios.post('/login', { email: this.email, password: this.password })
        .then(res => {
          const { user, token } = res.data
          this.$store.commit('user/set', { name: user.name, email: user.email, img: user.img })

          localStorage.setItem('token', JSON.stringify(token))

          this.$socket.client.auth = { token }
          this.$socket.client.connect()

          this.$router.push('/chat')
        })
        .catch(() => this.loading = false)
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