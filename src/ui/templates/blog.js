import React from 'react'
import PropTypes from 'prop-types'

import { Content, Header, Navigation, Interaction } from '../organisms'
import { Copy } from '../organisms/copy'
import { Shadows } from '../organisms/shadows'

const Blog = ({ title, subtitle }) => (
	<div>
		<Header dark />
		<Shadows />
		<Content 
			title={title}
			subtitle={subtitle}
		/>
		<Navigation />
		<Interaction />
		<Copy />
	</div>
)

Blog.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
}

export default Blog
