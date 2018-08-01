import React from 'react'
import PropTypes from 'prop-types'

import ContentHeadingLayout from '../../atoms/content-heading-layout'
import ContentHeadingWrapper from '../../atoms/content-heading-wrapper'
import ContentHeadingTitle from '../../atoms/content-heading-title'
import ContentHeadingSubtitle from '../../atoms/content-heading-subtitle'
import Icon from '../../atoms/icon'

const ContentHeading = ({ icon, title, subtitle }) => (
	<ContentHeadingLayout>
		<ContentHeadingWrapper>
			<Icon src={icon} />
			<ContentHeadingTitle>{title}</ContentHeadingTitle>
			<ContentHeadingSubtitle>{subtitle}</ContentHeadingSubtitle>
		</ContentHeadingWrapper>
	</ContentHeadingLayout>
)

ContentHeading.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired
}

ContentHeading.defaultProps = {
	icon: 'assets/images/blog-icon.svg'
}

export default ContentHeading
