import { getUserIdOrThrowError, isAuthorPostExists, isAdmin, Context } from '../../utils'

export const post = {
  async createDraftPost(parent, { title, text }, ctx: Context, info) {
    const userId = getUserIdOrThrowError(ctx)
    return ctx.db.mutation.createPost(
      {
        data: {
          title,
          text,
          isPublished: false,
          author: {
            connect: { id: userId },
          },
        },
      },
      info
    )
  },

  async publishPost(parent, { id }, ctx: Context, info) {
    const userId = getUserIdOrThrowError(ctx)
    const postExists = await isAuthorPostExists(ctx, id, userId)
    const isUserAdmin = await isAdmin(ctx, id)
    if (!postExists && !isUserAdmin) {
      throw new Error(`Post not found or you don't have access rights to publish it.`)
    }

    return ctx.db.mutation.updatePost(
      {
        where: { id },
        data: { isPublished: true },
      },
      info,
    )
  },

  async deletePost(parent, { id }, ctx: Context, info) {
    const userId = getUserIdOrThrowError(ctx)
    const postExists = await isAuthorPostExists(ctx, id, userId)
    const isUserAdmin = await isAdmin(ctx, id)
    if (!postExists && !isUserAdmin) {
      throw new Error(`Post not found or you don't have access rights to delete it.`)
    }

    return ctx.db.mutation.deletePost({ where: { id } })
  },

  
  async addVoteToPost(parent, { postId, voteType }, ctx: Context, info) {
    const userId = getUserIdOrThrowError(ctx)
    const userVote = await ctx.db.query.votes({
      where: {
        user: {
          id: userId,
        },
        post: {
          id: postId,
        },
      }
    }, '{ id }')

    const voteId = userVote.length ? userVote[0].id : ""
    return ctx.db.mutation.updatePost({
      where: { id: postId },
      data: {
        votes: {
          upsert: {
            where: {
              id: voteId,
            },
            create: {
              type: voteType,
              user: {
                connect: {
                  id: userId,
                },
              }
            },
            update: {
              type: voteType,
            },
          }
        }
      }
    })
  },

  async deleteVoteInPost(parent, { postId, voteId }, ctx: Context, info) {
    const userId = getUserIdOrThrowError(ctx)
    const voteExists = await ctx.db.exists.Vote({ id: voteId, user: { id: userId } })

    if (!voteExists) {
      throw new Error(`Vote not found or you don't have access rights to remove it.`)
    }

    return ctx.db.mutation.updatePost({
      where: { id: postId },
      data: {
        votes: {
          delete: {
            id: voteId
          }
        }
      }
    })
  }
}
