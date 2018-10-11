import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
	ContentHeadingWrapper, 
	ContentHeadingTitle, 
	ContentHeadingSubtitle, 
	Icon
} from '../atoms'

const ContentHeadingLayout = styled.div`
	display: flex;
	height: 560px;
	background: url('./assets/images/head.jpg');
	background-size: cover;
	background-position-y: center;
	box-sizing: border-box;
	justify-content: center;
	align-items: flex-end;
	padding-top: 70px;
`

const ContentHeading = ({ title, subtitle }) => (
	<ContentHeadingLayout>
		<ContentHeadingWrapper>
			<Icon type='blog' />
			<ContentHeadingTitle>{title}</ContentHeadingTitle>
			<ContentHeadingSubtitle>{subtitle}</ContentHeadingSubtitle>
		</ContentHeadingWrapper>
	</ContentHeadingLayout>
)

ContentHeading.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
}

export default ContentHeading
