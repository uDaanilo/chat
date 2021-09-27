import passport from "passport";
import UserService from '../modules/User/service'

import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import { Strategy as GHStrategy } from 'passport-github2'

const userService = new UserService()

const jwtStrategy = new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
}, async (payload, done) => {
  try {
    const user = await userService.getById(payload.sub)

    if(!user) return done(null, false)

    return done(null, user)
  } catch (err) {
    return done(err, false)
  }
})

const ghStrategy = new GHStrategy({
  clientID: process.env.GH_CLIENT_ID,
  clientSecret: process.env.GH_CLIENT_SECRET,
  callbackURL: process.env.GH_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const userObj = {
      name: profile.username,
      img: profile._json.avatar_url,
      githubId: profile.id
    }

    const user = await userService.create(userObj)

    return done(null, user)
  } catch (err) {
    if(err instanceof Error && err.message === 'User already exists') {
      const user = await userService.getByGithubId(profile.id)

      return done(null, user)
    }

    return done(err, false)
  }
})

passport.use(jwtStrategy)
passport.use(ghStrategy)

const authJwt = passport.authenticate('jwt', { session: false })
const authGh = passport.authenticate('github', { session: false })

export { authJwt, authGh }