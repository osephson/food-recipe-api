import Joi from 'joi'
import { password } from '../validate/custom.validation'
import { IUser } from '../user/user.interface'

const authBody: Record<keyof IUser, any> = {
  name: Joi.string().required(),
  password: Joi.string().required().custom(password),
}

export const authRequestBody = {
  body: Joi.object().keys(authBody),
}
