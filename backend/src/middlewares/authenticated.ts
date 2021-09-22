import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import User from "../models/User";

export default async function(req: Request, res: Response, next: NextFunction) {
  let headerToken = req.headers.authorization

  if(!headerToken) return res.status(401).send()

  try {
    const [, token] = headerToken.split(' ')

    const { sub } = verify(token, process.env.SECRET_KEY)

    const user = await User.findOne({ _id: sub })

    if(!user) return res.status(401).send()

    req.user = user

    return next()
  } catch (err) {
    return res.status(401).send()
  }
}