import { getUserIdOrThrowError, isAuthorPostExists, isAdmin } from '../../utils'
import { MutationResolvers } from '../../generated/graphqlgen'

type PostMutationResolvers = Pick<
  MutationResolvers.Type,
  | 'createDraftPost'
  | 'publishPost'
  | 'deletePost'
  | 'addVoteToPost'
  | 'deleteVoteInPost'
>

export const post: PostMutationResolvers = {
  async createDraftPost(_parent, { title, text }, ctx) {
    const userId = getUserIdOrThrowError(ctx)
    return ctx.prisma.createPost({
      title,
      normalizeTitle: title.toLocaleLowerCase(),
      text,
      isPublished: false,
      author: {
        connect: { id: userId },
      },
    })
  },

  async publishPost(_parent, { id }, ctx) {
    const userId = getUserIdOrThrowError(ctx)
    const postExists = await isAuthorPostExists(ctx, id, userId)
    const isUserAdmin = await isAdmin(ctx, id)
    if (!postExists && !isUserAdmin) {
      throw new Error(
        `Post not found or you don't have access rights to publish it.`,
      )
    }

    return ctx.prisma.updatePost({
      where: { id },
      data: { isPublished: true },
    })
  },

  async deletePost(_parent, { id }, ctx) {
    const userId = getUserIdOrThrowError(ctx)
    const postExists = await isAuthorPostExists(ctx, id, userId)
    const isUserAdmin = await isAdmin(ctx, id)
    if (!postExists && !isUserAdmin) {
      throw new Error(
        `Post not found or you don't have access rights to delete it.`,
      )
    }

    return ctx.prisma.deletePost({ id })
  },

  async addVoteToPost(_parent, { postId, voteType }, ctx) {
    const userId = getUserIdOrThrowError(ctx)

    if (!voteType) {
      throw new Error(`No VoteType specified.`)
    }

    const userVote = await ctx.prisma.votes({
      where: {
        user: {
          id: userId,
        },
        post: {
          id: postId,
        },
      },
    })

    const voteId = userVote.length ? userVote[0].id : ''
    return ctx.prisma.updatePost({
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
              },
            },
            update: {
              type: voteType,
            },
          },
        },
      },
    })
  },

  async deleteVoteInPost(_parent, { postId, voteId }, ctx) {
    const userId = getUserIdOrThrowError(ctx)
    const voteExists = await ctx.prisma.$exists.vote({
      id: voteId,
      user: { id: userId },
    })

    if (!voteExists) {
      throw new Error(
        `Vote not found or you don't have access rights to remove it.`,
      )
    }

    return ctx.prisma.updatePost({
      where: { id: postId },
      data: {
        votes: {
          delete: {
            id: voteId,
          },
        },
      },
    })
  },
}
