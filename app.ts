import express, { Express } from 'express'
import bodyParser from 'body-parser'

import router from './src/routes'

const app: Express = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)

export default app
