import 'dotenv/config'

const mongoURL = process.env.MONGODB_URL ?? 'mongodb://127.0.0.1:27017/food-recipe'
const jwtSecret = process.env.JWT_SECRET ?? 'food-recipe-secret'
const tokenExpireDuration = process.env.TOKEN_EXPIRE_DURATION ?? 60 * 60 * 12

const config = {
  port: process.env.PORT,
  mongoURL,
  jwtSecret,
  tokenExpireDuration,
}

export default config
