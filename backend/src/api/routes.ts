import { Router } from "express";
import UserController from "../modules/User/controller";
import MessageController from "../modules/Message/controller";
import upload from "../middlewares/upload";
import { authJwt, authGh } from "../config/passport";

class Routes {
  public router: Router

  constructor() {
    this.router = Router()

    this.routes()
  }

  private routes() {
    const userController = new UserController()
    const msgController = new MessageController()

    this.router.get('/user', authJwt, userController.index)
    this.router.get('/user/:id', authJwt, userController.getById)
    this.router.post('/user/validate', userController.validateToken)
    this.router.post('/user', upload.single('img'), userController.create)
    this.router.post('/login', userController.signin)
    this.router.post('/login/github', authGh, userController.signinWithGithub)

    this.router.get('/message', authJwt, msgController.index)
    this.router.post('/message/image', authJwt, upload.single('img'), msgController.image)
  }
}

export default new Routes().router