import { ApolloServer, gql } from 'apollo-server-micro'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import Sequelize from 'sequelize'
import glob from 'glob'
// import cls from 'cls-hooked'

const db = new Sequelize(require('../../config/sequelize.json')[process.env.NODE_ENV])
// Sequelize.useCLS(cls.createNamespace('trans-namespace'))

glob.sync('sequelize/models/*').forEach(e => console.log(require(`../../${e}`)))
/* relations(db) */

const apolloServer = new ApolloServer({
  typeDefs: mergeTypeDefs(loadFilesSync('graphql/schemas')),
  resolvers: mergeResolvers(loadFilesSync('graphql/resolvers')),
  context: () => ({ db })
})

const startServer = apolloServer.start()

export default async function handler (req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false
  }
}
