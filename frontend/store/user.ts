interface IUserAuth {
  name: string,
  email: string,
  img: string
  password?: string
  provider: string
}

export const state = () => ({
  name: '',
  email: '',
  img: '',
  loading: false
})

export const mutations = {
  set(state: IUserAuth, profile: IUserAuth) {
    state.name = profile.name
    state.email = profile.email
    state.img = profile.img
  },
  clear(state: IUserAuth) {
    state.name = '',
    state.email = '',
    state.img = ''
  },
  loading(state: any, loading: boolean) {
    state.loading = loading
  }
}

export const actions = {
  signin({ commit }: any, payload: IUserAuth) {
    commit('loading', true)

    let requestUrl = `/login`
    let params: object | null

    if(payload.provider && payload.provider.toLowerCase() == 'github') {
      const ghCode = new URLSearchParams(window.location.search).get('code')
      
      params = null
      requestUrl += `/github?code=${ghCode}`
    } else {
      params = { email: payload.email, password: payload.password }
    }
    
    //@ts-ignore
    this.$axios.post(requestUrl, params)
      .then((res: any) => {
        const { user, token } = res.data

        commit('set', { name: user.name, email: user.email, img: user.img })
        commit('loading', false)

        localStorage.setItem('token', JSON.stringify(token))
        window.location.href = '/chat'
      })
  },
  logout({ commit }: any) {
    localStorage.removeItem('token')
    commit('user/clear')

    window.location.href = '/chat/login'
  }
}