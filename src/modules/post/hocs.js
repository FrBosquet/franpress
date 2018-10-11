import React from 'react'
import { graphql } from 'react-apollo'
import { compose, setDisplayName, branch, renderComponent } from 'recompose'
import gql from 'graphql-tag'

export const withPost = compose(
	setDisplayName('WithPost'),
	graphql(gql`{
    post(id: "1"){
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
  }`,
	{
		props: ({ data: { post } }) =>  post 
	}),
	branch(({ title }) => !title, renderComponent(() => <div>Loading...</div>))
)