import { UserResolvers } from '../generated/graphqlgen'

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  posts(_parent, _args, ctx) {
    return ctx.prisma.user({ id: _parent.id }).posts()
  },

  votes(_parent, _args, ctx) {
    return ctx.prisma.user({ id: _parent.id }).votes()
  },
}
