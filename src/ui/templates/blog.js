import React from 'react'
import PropTypes from 'prop-types'

import { Content, Header, Navigation, Interaction } from '../organisms'
import { Copy } from '../organisms/copy'
import { Shadows } from '../organisms/shadows'

const Blog = ({ title, subtitle, date, photoAuthor, tags, content, navigation }) => (
	<div>
		<Header dark />
		<Shadows />
		<Content 
			title={title}
			subtitle={subtitle}
			date={date}
			photoAuthor={photoAuthor}
			tags={tags}
			content={content}
		/>
		<Navigation
			items={navigation}
		/>
		<Interaction />
		<Copy />
	</div>
)

Blog.propTypes = {
	content: PropTypes.object,
	navigation: PropTypes.array,
	tags: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string,
	subtitle: PropTypes.string,
	date: PropTypes.string,
	photoAuthor: PropTypes.string
}

export default Blog
