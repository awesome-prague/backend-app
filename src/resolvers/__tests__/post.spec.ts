import { prisma } from '../../generated/prisma-client/'
import * as allResolvers from '../index'

const resolvers = allResolvers.default

test.skip("creating draft post won't work for unauthorized", async () => {
  const parent = undefined
  const args = {
    text: 'some text',
    title: 'New post',
  }
  const ctx = { prisma, request: { get: () => false } }

  const info = `{ content, status, title }`

  const check = async () => {
    return resolvers.Mutation.createDraftPost(parent, args, ctx, info as any)
  }

  await expect(check()).rejects.toThrow(/Not authorized/)
})
