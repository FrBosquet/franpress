import React from 'react'
import PropTypes from 'prop-types'

import { Content, Header, Navigation, Interaction, FadeScreen } from '../organisms'
import { Copy } from '../organisms/copy'
import { Shadows } from '../organisms/shadows'

const Blog = ({
	title,
	subtitle,
	date,
	photoAuthor,
	tags,
	content,
	navigation,
	darkHeader,
	nextPost,
	prevPost,
	fetching,
	icon,
	photoUrl
}) => {
	return (
		<div>
			<Header dark={ darkHeader } />
			<Shadows />
			<Content
				title={ title }
				subtitle={ subtitle }
				date={ date }
				icon={ icon }
				photoUrl={ photoUrl }
				photoAuthor={ photoAuthor }
				tags={ tags }
				content={ content }
			/>
			<Navigation
				items={ navigation }
			/>
			<Interaction
				nextPost={ nextPost }
				prevPost={ prevPost }
			/>
			<Copy />
			<FadeScreen faded={ fetching } />
		</div>
	)
}

Blog.propTypes = {
	nextPost: PropTypes.func,
	prevPost: PropTypes.func,
	content: PropTypes.object,
	navigation: PropTypes.array,
	tags: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string,
	subtitle: PropTypes.string,
	date: PropTypes.string,
	photoAuthor: PropTypes.string,
	photoUrl: PropTypes.string,
	icon: PropTypes.string,
	darkHeader: PropTypes.bool,
	fetching: PropTypes.bool
}

export default Blog
