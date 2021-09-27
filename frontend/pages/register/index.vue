<template>
  <section @keydown.enter="register" class="register">
    <v-card style="min-width: 20%" class="">
      <v-card-subtitle>
        <v-icon>mdi-account-plus</v-icon> Registrar
      </v-card-subtitle>

      <v-card-text class="">

        <div class="d-flex justify-center mt-5 img-input">
          <label for="img">
            <v-avatar class="d-flex justify-center align-center" size="128">
              <img margin="auto" id="user-img" src="https://files.catbox.moe/r51t0h.png" alt="">
            </v-avatar>
          </label>
          <input ref="imgInput" accept="image/*" @change="changeImagePreview" type="file" name="img" id="img" class="d-none">
        </div>

        <v-form ref="form" v-model="valid">
          <v-text-field
            label="Name"
            color="accent"
            type="text"
            v-model="name"
            :rules="[ rules.required, rules.minLength(name, 3) ]"
            :disabled="loading"
            @keydown.enter="register"
          ></v-text-field>
          <v-text-field
            label="Email"
            color="accent"
            type="email"
            v-model="email"
            @keydown.enter="register"
            :rules="[ rules.required ]"
            :disabled="loading"
          ></v-text-field>
          <v-text-field
            label="Password"
            color="accent"
            type="password"
            v-model="password"
            @keydown.enter="register"
            :rules="[ rules.required, rules.minLength(password, 8) ]"
            :disabled="loading"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions class="d-flex justify-center">
        <v-btn :loading="loading" @click="register" text color="accent">
          <v-icon>mdi-account-plus</v-icon> Criar conta
        </v-btn>
      </v-card-actions>

    </v-card>
  </section>
</template>

<script>

export default {
  name: "Register",
  data: () => {
    return {
      name: '',
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
    register(){
      if(!this.$refs.form.validate())
        return this.$store.dispatch('alert/set', { message: 'Preencha o formulário corretamente', type: 'error' })

      if(!this.$refs.imgInput.files[0])
        return this.$store.dispatch('alert/set', { message: 'Você deve selecionar uma imagem', type: 'error' })

      if(this.$refs.imgInput.files[0].size > (4 * 1024 * 1024))
        return this.$store.dispatch('alert/set', { message: 'Arquivo muito grande, tamanho máximo 4MB', color: 'accent' })

      this.loading = true
      const { name, email, password } = this
      const form = new FormData()

      form.append('img', this.$refs.imgInput.files[0])
      form.append('name', name)
      form.append('email', email)
      form.append('password', password)

      this.$axios.post('/user', form)
        .then(() => {
          this.$axios.post('/login', { email, password })
            .then(res => {
              const { user, token } = res.data

              this.$store.commit('user/set', { name: user.name, email: user.email, img: user.img })
    
              localStorage.setItem('token', JSON.stringify(token))

              this.$socket.client.auth = { token }
              this.$socket.client.connect()

              this.$router.push('/chat')
            })
            .catch(() => this.loading = false)
        })
        .catch(() => this.loading = false)
    },
    changeImagePreview(e) {
      if(!e.target.files[0]) return
      const preview = URL.createObjectURL(e.target.files[0])

      document.querySelector('#user-img').src = preview
    }
  },
  created(){
    if(this.$store.state.user.name) return this.$router.push('/chat')
  }
}

</script>

<style>
  .register{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .register .img-input img {
    cursor: pointer;
  }
</style>