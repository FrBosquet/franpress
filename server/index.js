const { ApolloServer, gql } = require('apollo-server')

const { savePost, getSortedPosts } = require('./db/index')

const typeDefs = gql`
  input ContentInput{
    type: String
    content: String
    items: [String]
    assets: [String]
  }

  type Content {
    type: String
    content: String
    items: [String]
    assets: [String]
  }

  input PostInput {
    title: String!
    subtitle: String!
    photoAuthor: String!
    tags: [String]!
    content: [ContentInput]
    icon: String
    photoUrl: String!
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

  type Mutation {
    addPost(post: PostInput): Post
  }
`

const resolvers = {
	Query: {
		posts: async () => await getSortedPosts(),
		post: async (root, args) => {
			const sortedPosts = await getSortedPosts()
			if(args.id) return sortedPosts.find(post => post.id === args.id)
			if(args.url) return sortedPosts.find(post => {
				return post.title.toLowerCase().replace(/\s/g, '-') === args.url
			})
		}
	},
	Mutation: {
		addPost: async (root, args) => {
			const post = await savePost(args.post)
			return post
		}
	}
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`Server listening at ${url}`)) //eslint-disable-line