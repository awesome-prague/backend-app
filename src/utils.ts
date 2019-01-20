import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma'

export interface Context {
  db: Prisma
  request: any
}

export function getUserIdOrThrowError(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }

  throw new AuthError()
}

export async function isAdmin(ctx: Context, id: string) {
  return await ctx.db.exists.User({
    id,
    role: "ADMIN",
  })
}

export async function isAuthorPostExists(ctx: Context, postId: string, authorId: string) {
  return await ctx.db.exists.Post({
    id: postId,
    author: { id: authorId },
  })
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
