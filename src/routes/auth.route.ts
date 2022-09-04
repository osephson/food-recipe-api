import express from 'express'
import authController from '../modules/auth/auth.controller'

const router = express.Router()

router.get('/login', authController.login)
router.get('/register', authController.register)

export default router
