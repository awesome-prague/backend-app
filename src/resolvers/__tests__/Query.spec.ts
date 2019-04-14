import { prisma } from '../../generated/prisma-client/'
import * as allResolvers from '../index'

const resolvers = allResolvers.default

test('search should work', async () => {
  const parent = undefined
  const args = {
    value: 'Dish',
  }
  const ctx = { prisma, request: { get: () => false } }

  const info = `{ id, title }`

  const result = await resolvers.Query.search(parent, args, ctx, info as any)
  expect(result.categories).toEqual([])
  expect(result.subCategories).toEqual([])
  expect(result.posts.length).toBe(1)
  expect(result.posts[0].title).toBe('Dish Burger Bistro')
})
