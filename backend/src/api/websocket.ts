import { Server, Socket } from "socket.io"
import { logger } from "../logger"
import authenticatedSocket from "../middlewares/authenticatedSocket"
import MessageService from "../modules/Message/service"
import UserService from "../modules/User/service"
import { UserModel } from '../models/User'

interface UserSocket {
  socket: Socket
  user: UserModel
}

class Websocket {
  public io: Server
  public connectedUsers = new Map<string, UserSocket>()
  private messageService = new MessageService()
  private userService = new UserService()

  constructor(io: Server) {
    this.io = io

    this.middlewares()
    this.init()
  }

  async init() {
    this.io.on('connection', async socket => {
      const { user } = socket.handshake

      this.connectedUsers.set(user.id, { user, socket })

      logger.info(`New user ${user.name} has connected`)
      this.emitConnectedUsers()
      
      socket.on('message', content => {
        this.message(content, user)
      })

      socket.on('connected_users:get', () => this.emitConnectedUsers(socket.id))

      socket.on('disconnect', () => this.disconnect(user))
    })
  }

  verifyAlreadyConnected(socket: Socket, next: any) {
    const { user } = socket.handshake

    if(this.connectedUsers.get(user.id)) {
      logger.info(`User ${user.name} already connected, kicking off`)

      setTimeout(() => socket.emit("already_connected"), 100)

      return next(new Error('Already connected'))
    }

    return next()
  }

  middlewares() {
    this.io.use(authenticatedSocket)
    this.io.use((socket, next) => this.verifyAlreadyConnected(socket, next))
  }

  async message(content: string, user: UserModel) {
    const message = await this.messageService.create({ author: user.id, content })

    const formattedMessage = {
      author: {
        img: message.author.img,
        name: message.author.name,
      },
      id: message.id,
      content: message.content,
      createdAt: message.createdAt
    }

    this.io.emit('message', formattedMessage)
  }

  disconnect(user: UserModel) {
    logger.info(`User ${user.name} has disconnected`)

    this.connectedUsers.delete(user.id)

    this.emitConnectedUsers()
  }

  async emitConnectedUsers(to: string | null = null) {
    let formattedConnectedUsers = []
    const users = await this.userService.get()
    this.connectedUsers.forEach(userSocket => {
      formattedConnectedUsers.push({
        id: userSocket.user.id,
        name: userSocket.user.name,
        img: userSocket.user.img,
        socketId: userSocket.socket.id
      })
    })

    users.forEach(user => {
      if(formattedConnectedUsers.find(u => u.id === user.id)) return

      formattedConnectedUsers.push({
        id: user.id,
        name: user.name,
        img: user.img,
        socketId: null
      })
    })

    if(to)
      return this.io.to(to).emit("connected_users", formattedConnectedUsers)

    setTimeout(() => this.io.emit("connected_users", formattedConnectedUsers), 100)
  }
}

export default Websocket