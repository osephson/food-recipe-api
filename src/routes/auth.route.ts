import express from 'express'
import { authController, authValidation } from '../modules/auth'

import validate from '../modules/validate/validate.middleware'

const router = express.Router()

router.post('/login', validate(authValidation.authRequestBody), authController.login)
router.post('/register', validate(authValidation.authRequestBody), authController.register)

export default router
