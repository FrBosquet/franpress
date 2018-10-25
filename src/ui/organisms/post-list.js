import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PostListLayout = styled.div`
	position: fixed;
  box-shadow: 0 0 ${props => props.open ? '25px' : '0'} rgba(0,0,0,0.30);
  background-color: #EBEBEB;
  bottom: ${props => props.open ? '0' : '-500px'};
	right: calc( (100% - 960px) / 2 - 200px);
	width: 800px;
	height: 500px;
	display: flex;
  transition: all 0.5s ease-in;
	justify-content: center;
	align-items: center;
	pointer-events: none;
`

const PostList = ({ open }) => (
	<PostListLayout open={ open }>
	</PostListLayout>
)

PostList.propTypes = {
	open: PropTypes.bool
}

PostList.defaultProps = {
	open: true
}

export default PostList