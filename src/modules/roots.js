import gql from 'graphql-tag'

export const defaults = {
	selectedPost: '1'
}

export const resolvers = {
	Mutation: {
		setActivePost: (_, post, { cache }) => {
			cache.writeData({ id: 'selectedPost', data: post })
			return null
		}
	},
	Query: {
		selectedPost: (root, args, { cache }) => {
			return cache.readQuery({ query: gql`
      {
        selectedPost
      }
      ` })
		} 
	}
}

export const typeDefs = `
  type Query {
    selectedPost: String
  }
`