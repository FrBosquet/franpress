const { ApolloServer, gql } = require('apollo-server')

const posts = require('./posts.json')

const typeDefs = gql`
  type Post {
    title: String
    content: String
  }

  type Query {
    posts: [Post]
  }
`

const resolvers = {
	Query: {
		posts: () => posts
	}
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`Server listening at ${url}`))