import { Server, Socket } from "socket.io"
import { logger } from "../logger"
import authenticatedSocket from "../middlewares/authenticatedSocket"
import MessageService from "../modules/Message/service"
import { UserModel } from '../models/User'

interface UserSocket {
  socket: Socket
  user: UserModel
}

class Websocket {
  public io: Server
  public connectedUsers = new Map<string, UserSocket>()
  private messageService = new MessageService()

  constructor(io: Server) {
    this.io = io

    this.middlewares()
    this.init()
  }

  async init() {
    this.io.on('connection', async socket => {
      const { user } = socket.handshake
      if(this.verifyAlreadyConnected(user, socket)) return

      this.connectedUsers.set(user.id, { user, socket })

      logger.info(`New user ${user.name} has connected`)
      this.emitConnectedUsers()
      
      socket.on('message', content => {
        this.message(content, user)
      })

      socket.on('disconnect', () => this.disconnect(user))
    })
  }

  verifyAlreadyConnected(user: UserModel, socket: Socket): boolean {
    if(this.connectedUsers.get(user.id)) {
      logger.info(`User ${user.name} already connected, kicking off`)

      setTimeout(() => {
        socket.emit("already_connected")
        socket.disconnect(true)
      }, 500)

      return true
    }

    return false
  }

  middlewares() {
    this.io.use(authenticatedSocket)
  }

  async message(content: string, user: UserModel) {

    const createMessage = await this.messageService.create({ author: user.id, content })

    this.io.emit('message', createMessage)
  }

  async disconnect(user: UserModel) {
    logger.info(`User ${user.name} has disconnected`)

    this.connectedUsers.delete(user.id)

    this.emitConnectedUsers()
  }

  async emitConnectedUsers() {
    let formattedConnectedUsers = []

    this.connectedUsers.forEach(userSocket => {
      formattedConnectedUsers.push({
        id: userSocket.user.id,
        name: userSocket.user.name,
        img: userSocket.user.img,
        socketId: userSocket.socket.id
      })
    })

    setTimeout(() => this.io.emit("connected_users", formattedConnectedUsers), 500)
  }
}

export default Websocket