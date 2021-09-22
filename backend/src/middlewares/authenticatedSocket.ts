import { verify } from "jsonwebtoken";
import { Socket } from "socket.io";
import User from "../models/User";

export default async function(socket: Socket, next) {
  const token = socket.handshake.auth.token as string

  try {
    const { sub } = verify(token, process.env.SECRET_KEY)

    const user = await User.findOne({ _id: sub })

    if(!user) throw new Error()

    socket.handshake.user = user

    return next()
  } catch (err) {
    return next(new Error('Invalid token'))
  }
}