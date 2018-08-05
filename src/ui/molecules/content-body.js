import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { centerBlock, sideBars } from '../mixins'

const ContentBodyLayout = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	${ centerBlock }
	${ sideBars }
`

const ContentBody = ({ children }) => (
	<ContentBodyLayout>
		{ children }
	</ContentBodyLayout>
)

ContentBody.propTypes = {
	children: PropTypes.node,
}

export default ContentBody