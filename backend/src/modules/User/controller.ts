import { Request, Response } from "express";
import { MulterCatboxFile } from "../../config/multer-catbox";
import UserService from './service'

class UserController { 
  async index(req: Request, res: Response) {
    const userService = new UserService()
    const users = await userService.get()

    return res.json(users)
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params
    const userService = new UserService()
    const user = await userService.getById(id)

    res.json(user)
  }

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body
    const file = req.file as MulterCatboxFile

    const userService = new UserService()

    const user = await userService.create({ name, email, password, img: file.url })

    res.json({ message: 'OK', user })
  }

  async signin(req: Request, res: Response) {
    const { email, password } = req.body
    const userService = new UserService()
    const token = await userService.generateToken({ email, password })

    if(!token) throw new Error()

    const user = await userService.getByEmail(email)

    res.json({ user, token })
  }

  async signinWithGithub(req: Request, res: Response) {
    const userService = new UserService()
    const token = await userService.generateToken({ githubId: req.user.githubId })

    if(!token) throw new Error()

    const user = await userService.getByGithubId(req.user.githubId)

    res.json({ user, token })
  }

  async validateToken(req: Request, res: Response) {
    const { token } = req.body

    if(!token) throw new Error('Token is mandatory')

    const userService = new UserService()
    const user = await userService.validateToken(token)

    return res.json(user)
  }

  // async update(req: Request, res: Response) {
  //   res.json({ message: 'OK' })
  // }

  // async delete(req: Request, res: Response) {
  //   res.json({ message: 'OK' })
  // }
}

export default UserController