import jwt from 'jsonwebtoken'
import config from '../config/config'

const generate = (payload: any) => {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.tokenExpireDuration + 's'
  })
}

export default {
  generate
}
