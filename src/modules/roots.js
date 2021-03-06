export const defaults = {
	selectedPost: 'pidxs1e1'
}

export const resolvers = {
	Mutation: {
		setActivePost: (parent, { id }, { cache }) => {
			cache.writeData({ data: { selectedPost: id } })
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