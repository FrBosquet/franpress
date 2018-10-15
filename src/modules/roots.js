export const defaults = {
	selectedPost: '1'
}

export const resolvers = {
	Mutation: {
		setActivePost: (_, { id }, { cache }) => {
			cache.writeData({ id: 'selectedPost', data: id })
			return id
		}
	}
}

export const typeDefs = `
  type Query {
		selectedPost: ID
	}
	
	type Mutation{
		setActivePost(id: ID!): ID
	}
`