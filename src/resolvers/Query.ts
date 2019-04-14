import { getUserIdOrThrowError } from '../utils'
import { QueryResolvers } from '../generated/graphqlgen'

export const Query: QueryResolvers.Type = {
  feed(_parent, _args, ctx) {
    return ctx.prisma.posts({ where: { isPublished: true } })
  },

  drafts(_parent, _args, ctx) {
    const id = getUserIdOrThrowError(ctx)

    const where = {
      isPublished: false,
      author: {
        id,
      },
    }

    return ctx.prisma.posts({ where })
  },

  posts(_parent, _args, ctx) {
    const where = {
      isPublished: true,
    }

    return ctx.prisma.posts({ where })
  },

  post(_parent, { id }, ctx) {
    return ctx.prisma.post({ id })
  },

  welcomePost(_parent, _args, ctx) {
    return ctx.prisma.post({ normalizeTitle: 'welcome post' })
  },

  subCategories(_parent, _args, ctx) {
    return ctx.prisma.subCategories()
  },

  async search(_parent, { value }, ctx) {
    const where = {
      normalizeTitle_contains: value.toLocaleLowerCase(),
    }
    const [posts, subCategories, categories] = await Promise.all([
      ctx.prisma.posts({ where }),
      ctx.prisma.subCategories({ where }),
      ctx.prisma.categories({ where }),
    ])

    return {
      posts,
      subCategories,
      categories,
    }
  },

  me(_parent, _args, ctx) {
    const id = getUserIdOrThrowError(ctx)
    return ctx.prisma.user({ id })
  },

  appState(_parent, _args, ctx) {
    return ctx.prisma.appState({ id: 1 })
  },
}
