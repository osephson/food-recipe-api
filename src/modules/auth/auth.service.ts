import { authRequestBody } from './auth.validation'
import { userService, User } from '../user'
import ApiError from '../errors/ApiError'
import httpStatus from 'http-status'

export const loginWithNameAndPassword = async (name: string, password: string) => {
  const user = await userService.getUserByName(name)
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect name or password')
  }
  return user
}