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
    return ctx.prisma.post({ slug: 'welcome-post' })
  },

  searchCategories(_parent, { value }, ctx) {
    const where = {
      title_contains: value,
    }
    return ctx.prisma.categories({ where })
  },

  me(_parent, _args, ctx) {
    const id = getUserIdOrThrowError(ctx)
    return ctx.prisma.user({ id })
  },

  appState(_parent, _args, ctx) {
    return ctx.prisma.appState({ id: 1 })
  },
}
