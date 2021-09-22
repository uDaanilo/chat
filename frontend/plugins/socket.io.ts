import Vue from 'vue'
import VueSocket from 'vue-socket.io-extended'
import { io } from 'socket.io-client'

const localStorageToken = localStorage.getItem('token') as string
const token = JSON.parse(localStorageToken)

const socket = io('https://chat-nuxtjs.herokuapp.com', {
  autoConnect: token ? true : false,
  reconnection: true,
})

socket.auth = { token }

export default () => {
  Vue.use(VueSocket, socket)
}