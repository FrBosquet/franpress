const { ApolloServer, gql } = require('apollo-server')

const posts = require('./posts.json')

const typeDefs = gql`
  type Content {
    type: String
    content: String
    items: [String]
    assets: [String]
  }

  type Post {
    id: ID!
    title: String
    subtitle: String
    photoAuthor: String
    date: String
    tags: [String]
    content: [Content]
    nextPost: String
    prevPost: String
  }

  type Query {
    posts: [Post]
    post(id: ID, url: String): Post
  }
`

const resolvers = {
	Query: {
		posts: () => posts,
		post: (root, args) => {
			if(args.id) return posts.find(post => post.id === args.id)
			if(args.url) return posts.find(post => {
				return post.title.toLowerCase().replace(' ', '-') === args.url
			})
		}
	}
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`Server listening at ${url}`))