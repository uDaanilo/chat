<template>
  <div class="login">
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
            :disabled="$store.state.user.loading"
          ></v-text-field>

          <v-text-field
            label="Password"
            color="accent"
            type="password"
            v-model="password"
            @keydown.enter="signin"
            required
            :rules="[ rules.required ]"
            :disabled="$store.state.user.loading"
          ></v-text-field>
        </v-form>

      </v-card-text>

      <v-card-actions class="login-btns d-flex justify-center">
        <v-btn :loading="$store.state.user.loading" @click="signin" text color="accent">
          <v-icon>mdi-login</v-icon> Entrar
        </v-btn>

        <router-link to="/register">
          <v-btn :loading="$store.state.user.loading" text color="accent">
            <v-icon>mdi-account-plus</v-icon> Criar conta
          </v-btn>
        </router-link>

        <a :href="`https://github.com/login/oauth/authorize?response_type=code&redirect_uri=${encodeURIComponent($config.ghRedirectUrl)}&client_id=7a6e70ad5d5082a3dff7`">
          <v-btn :loading="$store.state.user.loading" text color="accent">
            <v-icon>mdi-github</v-icon> Entrar com github
          </v-btn>
        </a>
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
      
      const { email, password } = this
      this.$store.dispatch('user/signin', { email, password })
    }
  },
  created(){
    if(this.$store.state.user.name) return this.$router.push('/chat')

    const ghCode = new URLSearchParams(window.location.search).get('code')

    if(!ghCode) return

    this.$store.dispatch('user/signin', { provider: 'github' })
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
  .login-btns {
    flex-direction: column;
  }
</style>