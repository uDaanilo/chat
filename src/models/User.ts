import { Document, model, Schema } from "mongoose";

export interface IUser {
  name: string
  email: string
  password?: string
  img: string
  githubId: string
  createdAt: Date
  updatedAt: Date
}

export interface UserModel extends Document, IUser {

}

const UserSchema = new Schema<UserModel>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    select: false
  },
  img: {
    type: String,
    required: true,
    default: 'https://files.catbox.moe/r51t0h.png'
  },
  githubId: {
    type: String
  }
}, {
  timestamps: true
})

export default model<UserModel>('User', UserSchema)