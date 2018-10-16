import React from 'react'
import { graphql } from 'react-apollo'
import { compose, setDisplayName, branch, renderComponent } from 'recompose'
import gql from 'graphql-tag'

export const withSelectedPostId = compose(
	setDisplayName('WithSelectedPostId'),
	graphql(gql`{ selectedPost @client }`, {
		props: ({ data: { selectedPost } }) => ({ selectedPost })
	})
)

export const withPostSelector = compose(
	setDisplayName('WithPostSelector'),
	graphql(gql`
    mutation SetActivePost($id: ID!){
      setActivePost(id: $id) @client
    }
  `,{
		props: ({ mutate }) => ({ setActivePost: id => mutate({ variables: { id } }) })
	})
)

export const withPost = compose(
	setDisplayName('WithPost'),
	withSelectedPostId,
	graphql(gql`
    query Post($id: ID!){
      post(id: $id){
        title
        subtitle
        date
        photoAuthor
        tags
        content{
          assets
          content
          items
          type
        }
      }
    }  
  `,
	{
		options: props => ({ variables: { id: props.selectedPost } }),
		props: ({ data }) => {
			return { ...data.post }
		}
	}),
	branch(({ title }) => !title, renderComponent(() => <div>Loading...</div>))
)