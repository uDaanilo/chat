import { Middleware } from '@nuxt/types'

const Middleware: Middleware = function ({ $axios, store }) {
  $axios.onError(err => {
    if(!err.response?.data.error) return console.error(err.message, err)

    store.dispatch('alert/set', {
      type: 'error',
      message: err.response?.data.error
    })
  })
}

export default Middleware