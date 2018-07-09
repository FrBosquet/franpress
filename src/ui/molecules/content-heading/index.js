import React from 'react'

import ContentHeadingLayout from '../../atoms/content-heading-layout'
import ContentHeadingWrapper from '../../atoms/content-heading-wrapper'
import Icon from '../../atoms/icon'

const ContentHeading = () => (
	<ContentHeadingLayout>
		<ContentHeadingWrapper>
			<Icon src="assets/images/blog-icon.svg" />
			<h1>Título de la entrada</h1>
			<h2>Subtitulo de la entrada</h2>
		</ContentHeadingWrapper>
	</ContentHeadingLayout>
)

export default ContentHeading
