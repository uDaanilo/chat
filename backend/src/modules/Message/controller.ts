import { Request, Response } from "express";
import { MulterCatboxFile } from "../../config/multer-catbox";
import MessageService from './service'

class MessageController { 
  async index(req: Request, res: Response) {
    const msgService = new MessageService()
    const messages = await msgService.getAll()

    const formattedMessages = messages.map(msg => ({
      author: {
        id: msg.author.id,
        name: msg.author.name,
        img: msg.author.img,
      },
      id: msg.id,
      content: msg.content,
      createdAt: msg.createdAt
    }))

    return res.json(formattedMessages)
  }

  image(req: Request, res: Response) {
    const file = req.file as MulterCatboxFile
    
    res.json({ src: file.url })
  }
}

export default MessageController