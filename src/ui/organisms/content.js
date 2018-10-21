import React from 'react'
import PropTypes from 'prop-types'

import { ContentHeading, ContentMetadata, ContentBody } from '../molecules'

const Content = ({ title, subtitle, date, photoAuthor, tags, content, photoUrl, icon }) => (
	<div>
		<ContentHeading
			title={ title }
			subtitle={ subtitle }
			photoUrl={ photoUrl }
			icon={ icon }
		/>
		<ContentMetadata 
			date={ date }
			photoAuthor={ photoAuthor }
			tags={ tags }
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
	photoUrl: PropTypes.string,
	icon: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
	content: PropTypes.object
}

export default Content
