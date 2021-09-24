import { Request, Response } from "express";
import { MulterCatboxFile } from "../../config/multer-catbox";
import MessageService from './service'

class MessageController { 
  async index(req: Request, res: Response) {
    const msgService = new MessageService()
    const messages = await msgService.getAll()

    return res.json(messages)
  }

  image(req: Request, res: Response) {
    const file = req.file as MulterCatboxFile
    
    res.json({ src: file.url })
  }
}

export default MessageController