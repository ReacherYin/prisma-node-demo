import { GraphQLServer, PubSub } from 'graphql-yoga'
import { Query } from './resolvers/query'
import { Mutation } from './resolvers/mutation'
import { Subscription } from './resolvers/subscription'

import prisma from './prisma'

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/generated/prisma.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: {
    pubsub,
    prisma
  }
})

server.start(() => console.log('SERVER STARTS ON PORT: 4000'))
