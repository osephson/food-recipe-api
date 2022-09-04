import express from 'express'
import { authController, authValidation } from '../modules/auth'

import validate from '../modules/validate/validate.middleware'

const router = express.Router()

router.get('/login', authController.login)
router.post('/register', validate(authValidation.register), authController.register)

export default router
