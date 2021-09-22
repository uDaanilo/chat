import Message from "../../models/Message";

class MessageService { 
  async getAll() {
    const msgs = await Message.find()
      .populate('author')

    return msgs
  }

  async create({ author, content }) {
    const msg = await Message.create({ author, content })
      .then(m => m.populate('author').execPopulate())

    return msg
  }
}

export default MessageService