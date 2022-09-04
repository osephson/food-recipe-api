import { Request, Response } from "express"

const login = (req: Request, res: Response) => {
  res.send('Login')
}

const register = (req: Request, res: Response) => {
  res.send('Register')
}

export default {
  login,
  register
}
