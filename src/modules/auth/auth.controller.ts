import { Request, Response } from "express"
import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"

import { userService } from "../user"

const login = (req: Request, res: Response) => {
  res.send('Login')
}

const register = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.create(req.body)
  return res.status(httpStatus.CREATED).json({ user })
})

export {
  login,
  register
}
