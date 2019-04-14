import { PostResolvers } from '../generated/graphqlgen'
import { VoteType } from 'src/generated/prisma-client'

export const Post: PostResolvers.Type = {
  ...PostResolvers.defaultResolvers,

  author(_parent, _arg, ctx) {
    return ctx.prisma.post({ id: _parent.id }).author()
  },

  votes(_parent, _arg, ctx) {
    return ctx.prisma.post({ id: _parent.id }).votes()
  },

  subCategories(_parent, _arg, ctx) {
    return ctx.prisma.post({ id: _parent.id }).subCategories()
  },

  async VoteSummary(_parent, _arg, ctx) {
    const voteTypeSum = (type: VoteType) => {
      return ctx.prisma
        .votesConnection({
          where: {
            post: {
              id: _parent.id,
            },
            type,
          },
        })
        .aggregate()
    }

    const [likes, dislikes] = await Promise.all([
      voteTypeSum('LIKE'),
      voteTypeSum('DISLIKE'),
    ])

    return {
      likes: likes.count,
      dislikes: dislikes.count,
    }
  },
}
