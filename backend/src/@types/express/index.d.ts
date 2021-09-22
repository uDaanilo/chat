import { UserModel } from "../../models/User";

declare module 'express' {
  interface Request {
    user?: UserModel
  }
}