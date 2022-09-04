import mongoose from "mongoose"
import bcrypt from 'bcryptjs'

import { IUserDoc, IUserModel } from "./user.interface"
import toJSON from "../../utils/toJSON"

const userSchema = new mongoose.Schema<IUserDoc, IUserModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value: string) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number')
        }
      },
      private: true, // used by the toJSON plugin
    },
  }
)

userSchema.plugin(toJSON)

userSchema.static('isNameTaken', async function (name: string, excludeUserId: mongoose.ObjectId): Promise<boolean> {
  const user = await this.findOne({ name, _id: { $ne: excludeUserId } })
  return !!user
})

userSchema.method('isPasswordMatch', async function (password: string): Promise<boolean> {
  const user = this
  return bcrypt.compare(password, user.password)
})

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

const User = mongoose.model<IUserDoc, IUserModel>('User', userSchema)

export default User
