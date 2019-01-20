import * as crypto from 'crypto'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { Context, getUserIdOrThrowError } from '../../utils'

export const auth = {
  async signup(parent, args, ctx: Context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const emailToken = crypto.randomBytes(64).toString('hex')

    const user = await ctx.db.mutation.createUser({
      data: { ...args, password, emailToken },
    })

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },

  async login(parent, { email, password }, ctx: Context, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },

  async forgetPassword (parent, { email }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }
    
    const uniqueId = crypto.randomBytes(64).toString('hex')
    await ctx.db.mutation.updateUser({
      where: { id: user.id },
      data: {
        resetPasswordExpires: new Date().getTime() + 1000 * 60 * 60 * 5, // 5 hours
        resetPasswordToken: uniqueId,
      }
    })
      
    // TODO: implement email service
    //emailGenerator.sendForgetPassword(uniqueId, email, ctx)

    return user
  },

  async resetPassword (parent, { resetPasswordToken, newPassword }, ctx, info) {
    const userCheck = await ctx.db.query.user({
      where: { resetPasswordToken }
    })
    if (!userCheck) {
      throw new Error(`Link is not valid`)
    } else {
      if (userCheck.resetPasswordExpires < new Date().getTime()) {
        throw new Error(`Link expired`)
      }

      const password = await bcrypt.hash(newPassword, 10)
      const uniqueId = crypto.randomBytes(64).toString('hex')
      const user = await ctx.db.mutation.updateUser({
        where: { resetPasswordToken: resetPasswordToken },
        data: {
          password,
          resetPasswordToken: uniqueId,
          resetPasswordExpires: new Date().getTime(),
        }
      })
      
      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      }
    }
  },

  async updatePassword (parent, { oldPassword, newPassword }, ctx, info) {
    let userId = getUserIdOrThrowError(ctx)

    const user = await ctx.db.query.user({ where: { id: userId } })
    const oldPasswordValid = await bcrypt.compare(oldPassword, user.password)
    if (!oldPasswordValid) {
      throw new Error('Old password is wrong, please try again.')
    }
    const newPasswordHash = await bcrypt.hash(newPassword, 10)
    
    await ctx.db.mutation.updateUser({
      where: { id: userId },
      data: { password: newPasswordHash }
    })

    return user
  },

  async validateEmail (parent, { emailToken }, ctx, info) {
    const userCheck = await ctx.db.query.User({
      where: {
        emailToken,
      }
    })
    if (!userCheck) {
      throw new Error(`No such user found.`)
    } else {
      if (userCheck.emailValidated) {
        throw new Error(`User Already validated`)
      }
    }
  
    const user = await ctx.db.mutation.updateUser({
      where: { emailToken },
      data: {
        emailvalidated: true
      }
    })

    return user
  }

  
}
