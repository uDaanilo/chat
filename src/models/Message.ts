import { Document, model, Schema } from "mongoose";
import { UserModel } from "./User";

export interface IMessage {
  author: UserModel
  content: string
  createdAt: Date
  updatedAt: Date
}

export interface MessageModel extends Document, IMessage {
  
}

const MessageSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export default model<MessageModel>('Message', MessageSchema)