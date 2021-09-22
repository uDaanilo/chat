import { Middleware } from '@nuxt/types'

const Middleware: Middleware = function ({ redirect, $axios, store }) {
  const token = localStorage.getItem('token')

  if(!token)
    return redirect('/login')

  return $axios.post('/user/validate', { token: JSON.parse(token) })
    .then(res => {
      const user = res.data

      if(!user) {
        localStorage.removeItem('token')

        return redirect('/login')
      }

      $axios.setToken(JSON.parse(token), 'bearer')
      store.commit('user/set', {
        name: user.name,
        email: user.email,
        img: user.img,
      })
    })
    .catch(err => {
      localStorage.removeItem('token')
      console.error(err)
      redirect('/login')
    })
}

export default Middleware