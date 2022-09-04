import mongoose from "mongoose"
import config from './src/config/config'

import app from './app'
mongoose.connect(config.mongoURL).then(() => {
  console.log('Connected to MongoDB!')

  app.listen(config.port, () => {
    console.log(`App is listening at http://localhost:${config.port}`)
  })
}).catch(e => {
  console.log(e)
})