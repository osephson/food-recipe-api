import httpStatus from "http-status"

import { IUser, IUserDoc } from "./user.interface"
import User from './user.model'
import ApiError from "../errors/ApiError"

export const create = async (userBody: IUser) => {
  if (await User.isNameTaken(userBody.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Name already taken')
  }

  return User.create(userBody)
}

export const getUserByName = async (name: string): Promise<IUserDoc | null> => User.findOne({ name })
