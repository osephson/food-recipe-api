import config from './src/config/config'

import app from './app'

app.listen(config.port, () => {
  console.log(`App is listening at http://localhost:${config.port}`)
})
