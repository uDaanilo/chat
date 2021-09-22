import express from 'express'
import 'express-async-errors'

import Routes from './routes'
import cors from 'cors'
import { Server } from 'socket.io'
import Websocket from './websocket'
import errorHandler from '../middlewares/errorHandler'

class Api {
  public app: express.Application
  public io: Server

  constructor() {
    this.app = express()

    this.middlewares()
    this.routes()
    this.errorHandler()
  }

  private middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  private routes() {
    this.app.use(Routes)
  }

  public startWebsocket(io: Server) {
    this.io = io

    new Websocket(io)
  }

  private errorHandler() {
    this.app.use(errorHandler)
  }
}

export default new Api()