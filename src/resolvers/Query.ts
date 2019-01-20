const {forwardTo} = require('prisma-binding')

import { getUserIdOrThrowError, Context } from '../utils'

export const Query = {
  feed(parent, args, ctx: Context, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx: Context, info) {
    const id = getUserIdOrThrowError(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({ where }, info)
  },

  posts(parent, args, ctx: Context, info) {
    const where = {
      isPublished: true,
    }

    return ctx.db.query.posts({ where }, info)
  },

  post(parent, { id }, ctx: Context, info) {
    return ctx.db.query.post({ where: { id } }, info)
  },

  welcomePost(parent, args, ctx: Context, info) {
    const where = {
      slug: 'welcome-post',
    }

    return ctx.db.query.post({ where }, info)
  },

  searchCategories(parent, { value }, ctx: Context, info) {
    const where = {
      title_contains: value,
    }
    return ctx.db.query.categories({ where }, info)
  },

  me(parent, args, ctx: Context, info) {
    const id = getUserIdOrThrowError(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },

  appState(parent, args, ctx: Context, info) {
    return ctx.db.query.appStates({}, info)
  },
}
