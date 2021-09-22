import { UserModel } from "../../models/User";

declare module "socket.io/dist/socket" {
  interface Handshake {
    user?: UserModel
  }
}