import mongoose, { Model, Document } from "mongoose"

export interface IUser {
  name: string
  password: string
}

export interface IUserDoc extends IUser, Document {
  isPasswordMatch(password: string): Promise<boolean>
}

export interface IUserModel extends Model<IUserDoc> {
  isNameTaken(name: string, excludeUserId?: mongoose.Types.ObjectId): Promise<boolean>
}
