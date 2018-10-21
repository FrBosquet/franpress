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
    icon: String
    photoUrl: String
  }

  type Query {
    posts: [Post]
    post(id: ID, url: String): Post
  }
`

const sortedPosts = posts
	.sort((a,b) => a.date < b.date ? 1 : -1)
	.map((post, idx, array) => ({
		...post,
		nextPost: idx !== 0 ? array[idx -1].id : null,
		prevPost: idx < array.length - 1 ? array[idx+1].id : null
	}))

const resolvers = {
	Query: {
		posts: () => sortedPosts,
		post: (root, args) => {
			if(args.id) return sortedPosts.find(post => post.id === args.id)
			if(args.url) return sortedPosts.find(post => {
				return post.title.toLowerCase().replace(' ', '-') === args.url
			})
		}
	}
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`Server listening at ${url}`)) //eslint-disable-line