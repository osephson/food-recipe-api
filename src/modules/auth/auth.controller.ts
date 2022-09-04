import { Request, Response } from "express"
import httpStatus from "http-status"

import { jwtToken, catchAsync } from "../../utils"
import { userService } from "../user"
import * as authService from './auth.service'

const login = catchAsync(async (req: Request, res: Response) => {
  const user = await authService.loginWithNameAndPassword(req.body.name, req.body.password)
  const token = jwtToken.generate({
    id: user._id
  })
  return res.json({ user, token })
})

const register = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.create(req.body)
  const token = jwtToken.generate({
    id: user._id
  })
  return res.status(httpStatus.CREATED).json({ user, token })
})

export {
  login,
  register
}
