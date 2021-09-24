import Vue from 'vue'
import VueSocket from 'vue-socket.io-extended'
import { io } from 'socket.io-client'

const localStorageToken = localStorage.getItem('token') as string
let token: string | null

try {
  token = JSON.parse(localStorageToken)
} catch (error) {
  token = null
}

export default ({ env }: any) => {
  const socket = io(env.baseURL, {
    autoConnect: token ? true : false,
    reconnection: true,
  })
  
  socket.auth = { token }

  Vue.use(VueSocket, socket)
}