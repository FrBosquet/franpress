import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'

import Blog from './views/Blog'
import { ApolloProvider } from 'react-apollo'

import { defaults, resolvers, typeDefs } from './modules/roots'

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	clientState: {
		defaults,
		resolvers,
		typeDefs
	}
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<Blog />
	</ApolloProvider>
	, document.getElementById('App'))
