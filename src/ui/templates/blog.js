import React from 'react'
import PropTypes from 'prop-types'

import { Content, Header, Navigation, Interaction } from '../organisms'
import { Copy } from '../organisms/copy'
import { Shadows } from '../organisms/shadows'

const Blog = ({ title, subtitle, date, photoAuthor, tags }) => (
	<div>
		<Header dark />
		<Shadows />
		<Content 
			title={title}
			subtitle={subtitle}
			date={date}
			photoAuthor={photoAuthor}
			tags={tags}
		/>
		<Navigation />
		<Interaction />
		<Copy />
	</div>
)

Blog.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	date: PropTypes.string,
	photoAuthor: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string)
}

export default Blog
