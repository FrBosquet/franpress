const { ApolloServer, gql } = require('apollo-server')

const posts = require('./posts.json')

const typeDefs = gql`
  type Post {
    id: ID!
    title: String
    content: String
  }

  type Query {
    posts: [Post]
    post(id: ID!): Post
  }
`

const resolvers = {
	Query: {
		posts: () => posts,
		post: (root, args) => posts.find(post => post.id === args.id)
	}
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`Server listening at ${url}`))