import { Router } from "express";
import UserController from "../modules/User/controller";
import authenticated from "../middlewares/authenticated";
import MessageController from "../modules/Message/controller";
import upload from "../middlewares/upload";

class Routes {
  public router: Router

  constructor() {
    this.router = Router()

    this.routes()
  }

  private routes() {
    const userController = new UserController()
    const msgController = new MessageController()

    this.router.get('/user', authenticated, userController.index)
    this.router.get('/user/:id', authenticated, userController.getById)
    this.router.post('/user/validate', userController.validateToken)
    this.router.post('/user', upload.single('img'), userController.create)
    this.router.post('/login', userController.signin)

    this.router.get('/message', authenticated, msgController.index)
  }
}

export default new Routes().router