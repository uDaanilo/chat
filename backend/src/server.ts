import api from './api/app'
import mongoose from 'mongoose'
import http from 'http'
import { Server } from 'socket.io'
import { logger } from './logger'
let io: Server

import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => {
    const server = http.createServer(api.app)
    io = new Server(server, {
      cors: {
        origin: '*'
      }
    })

    api.startWebsocket(io)

    const PORT = process.env.PORT || 8080
    server.listen(PORT, () => {
      logger.info(`Server listening on ${PORT}`)
    })
  })
  .catch(logger.error)