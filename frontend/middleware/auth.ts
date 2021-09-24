import { Middleware } from '@nuxt/types'

const Middleware: Middleware = function ({ redirect, $axios, store }) {
  let token = localStorage.getItem('token')
  
  if(!token)
    return redirect('/login')

  try {
    token = JSON.parse(token)
  } catch (error) {
    return redirect('/login')
  }

  return $axios.post('/user/validate', { token })
    .then(res => {
      const user = res.data

      if(!user) {
        localStorage.removeItem('token')

        return redirect('/login')
      }

      $axios.setToken(token as string, 'bearer')
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