import 'dotenv/config'

const mongoURL = process.env.MONGODB_URL ?? 'mongodb://127.0.0.1:27017/food-recipe'

const config = {
  port: process.env.PORT,
  mongoURL
}

export default config
