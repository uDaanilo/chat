import { Request, Response } from "express";
import MessageService from './service'

class MessageController { 
  async index(req: Request, res: Response) {
    const msgService = new MessageService()
    const messages = await msgService.getAll()

    return res.json(messages)
  }
}

export default MessageController