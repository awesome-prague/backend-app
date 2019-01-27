import * as crypto from 'crypto'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { getUserIdOrThrowError } from '../../utils'
import { MutationResolvers } from '../../generated/graphqlgen'

const APP_SECRET = process.env.APP_SECRET as string

type AuthMutationResolvers = Pick<
  MutationResolvers.Type,
  | 'signup'
  | 'login'
  | 'forgetPassword'
  | 'resetPassword'
  | 'updatePassword'
  | 'validateEmail'
>

export const auth: AuthMutationResolvers = {
  async signup(_parent, args, ctx) {
    const password = await bcrypt.hash(args.password, 10)
    const emailToken = crypto.randomBytes(64).toString('hex')

    const user = await ctx.prisma.createUser({ ...args, password, emailToken })

    return {
      token: jwt.sign({ userId: user.id }, APP_SECRET),
      user,
    }
  },

  async login(_parent, { email, password }, ctx) {
    const user = await ctx.prisma.user({ email })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ userId: user.id }, APP_SECRET),
      user,
    }
  },

  async forgetPassword(_parent, { email }, ctx) {
    const user = await ctx.prisma.user({ email })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const uniqueId = crypto.randomBytes(64).toString('hex')
    await ctx.prisma.updateUser({
      where: { id: user.id },
      data: {
        resetPasswordExpire: new Date().getTime() + 1000 * 60 * 60 * 5, // 5 hours
        resetPasswordToken: uniqueId,
      },
    })

    // TODO: implement email service
    // emailGenerator.sendForgetPassword(uniqueId, email, ctx)

    return user
  },

  async resetPassword(_parent, { resetPasswordToken, newPassword }, ctx) {
    const userCheck = await ctx.prisma.user({ resetPasswordToken })
    if (!userCheck) {
      throw new Error(`Link is not valid`)
    } else {
      if (
        userCheck.resetPasswordExpire &&
        userCheck.resetPasswordExpire < new Date().getTime()
      ) {
        throw new Error(`Link expired`)
      }

      const password = await bcrypt.hash(newPassword, 10)
      const uniqueId = crypto.randomBytes(64).toString('hex')
      const user = await ctx.prisma.updateUser({
        where: { resetPasswordToken },
        data: {
          password,
          resetPasswordToken: uniqueId,
          resetPasswordExpire: new Date().getTime(),
        },
      })

      return {
        token: jwt.sign({ userId: user.id }, APP_SECRET),
        user,
      }
    }
  },

  async updatePassword(_parent, { oldPassword, newPassword }, ctx) {
    const userId = getUserIdOrThrowError(ctx)

    const user = await ctx.prisma.user({ id: userId })
    const oldPasswordValid = await bcrypt.compare(oldPassword, user.password)
    if (!oldPasswordValid) {
      throw new Error('Old password is wrong, please try again.')
    }
    const newPasswordHash = await bcrypt.hash(newPassword, 10)

    await ctx.prisma.updateUser({
      where: { id: userId },
      data: { password: newPasswordHash },
    })

    return user
  },

  async validateEmail(_parent, { emailToken }, ctx) {
    const userCheck = await ctx.prisma.user({ emailToken })
    if (!userCheck) {
      throw new Error(`No such user found.`)
    } else {
      if (userCheck.emailValidated) {
        throw new Error(`User Already validated`)
      }
    }

    const user = await ctx.prisma.updateUser({
      where: { emailToken },
      data: {
        emailValidated: true,
      },
    })

    return user
  },
}
