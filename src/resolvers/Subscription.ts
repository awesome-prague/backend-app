import { SubscriptionResolvers } from '../generated/graphqlgen'

export const Subscription: SubscriptionResolvers.Type = {
  ...SubscriptionResolvers.defaultResolvers,

  posts: {
    subscribe: async (_parent, _args, ctx) => {
      return ctx.prisma.$subscribe
        .post({
          mutation_in: ['CREATED', 'UPDATED'],
        })
        .node()
    },
    // NOTE: Wrong Prisma types
    resolve: (payload: any) => {
      return payload
    },
  },
}
