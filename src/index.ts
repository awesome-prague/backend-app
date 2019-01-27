import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client/'
import resolvers from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  // @ts-ignore Wrong types
  resolvers,
  context: (req) => ({
    ...req,
    prisma,
  }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
