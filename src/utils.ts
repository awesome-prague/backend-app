import * as jwt from 'jsonwebtoken'
import { Prisma, User } from './generated/prisma-client/'

export interface Context {
  prisma: Prisma
  request: any
}
export interface AuthPayload {
  token: string
  user: User
}

export function getUserIdOrThrowError(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const secret = process.env.APP_SECRET as string
    const { userId } = jwt.verify(token, secret) as {
      userId: string
    }
    return userId
  }

  throw new AuthError()
}

export async function isAdmin(ctx: Context, id: string) {
  return await ctx.prisma.$exists.user({
    id,
    role: 'ADMIN',
  })
}

export async function isAuthorPostExists(
  ctx: Context,
  postId: string,
  authorId: string,
) {
  return await ctx.prisma.$exists.post({
    author: { id: authorId },
    id: postId,
  })
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
