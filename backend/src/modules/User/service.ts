import { isValidObjectId } from "mongoose"
import User, { UserModel } from "../../models/User"
import { sign, verify } from 'jsonwebtoken'
import { compare, hash } from 'bcryptjs'

export interface IUser {
  name?: string
  email?: string
  password?: string
  img?: string
  githubId?: string
}

class UserService {
  public async get() {
    const users = await User.find()
    
    return users
  }

  public async getById(id: string) {
    if(!id) throw new Error('Id is mandatory')
    if(!isValidObjectId(id)) throw new Error('Invalid id')
    
    const user = await User.findOne({ _id: id })
    
    return user
  }

  public async getByEmail(email: string) {
    if(!email) throw new Error('Email is mandatory')

    const user = await User.findOne({ email })

    return user
  }

  public async getByGithubId(id: string) {
    if(!id) throw new Error('Github id is mandatory')

    const user = await User.findOne({ githubId: id })

    return user
  }

  public async create({ name, email, password, img, githubId }: IUser): Promise<UserModel> {
    if(githubId) {
      const userExists = await User.findOne({ githubId })

      if(userExists) throw new Error('User already exists')

      const user = await User.create({ name, img, githubId })

      return user
    }

    if(name.length < 3) throw new Error('Username min length 3')
    if(password.length < 8) throw new Error('Password min length 8')

    const userExists = await User.findOne({ email })

    if(userExists) throw new Error('Este email já está em uso')

    const passwordHash = await hash(password, 8)

    const user = await User.create({ name, email, password: passwordHash, img })

    return user
  }

  public async generateToken({ email, password, githubId }: IUser) {
    let user: UserModel

    if(githubId) {
      user =  await User.findOne({ githubId })

      if(!user) throw new Error('User not found')
    } else {
      if(!email || !password) throw new Error('Email/senha incorretos')
  
      user =  await User.findOne({ email })
        .select('+password')
  
      if(!user) throw new Error('Email/senha incorretos')
  
      const isEqual = await compare(password, user.password)
  
      if(!isEqual) throw new Error('Email/senha incorretos')
    }

    const token = sign({
      name: user.name
    }, process.env.SECRET_KEY, {
      subject: user.id,
      expiresIn: '1d'
    })

    return token
  }

  public async validateToken(token) {
    try {
      const sub = verify(token, process.env.SECRET_KEY).sub as string

      if(!sub) throw 'Invalid token'

      const user = await this.getById(sub)

      if(!user) throw 'Invalid token'

      return user
    } catch (err) {
      return false
    }
  }
}

export default UserService