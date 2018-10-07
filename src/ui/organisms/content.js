import React from 'react'
import PropTypes from 'prop-types'

import { ContentHeading, ContentMetadata, ContentBody } from '../molecules'

const Content = ({ title, subtitle, date, photoAuthor, tags, content }) => (
	<div>
		<ContentHeading
			title={ title }
			subtitle={ subtitle }
		/>
		<ContentMetadata 
			date={date}
			photoAuthor={photoAuthor}
			tags={tags}
		/>
		<ContentBody>
			{	content }
		</ContentBody>
	</div>
)

Content.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	date: PropTypes.string,
	photoAuthor: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
	content: PropTypes.object
}

export default Content
