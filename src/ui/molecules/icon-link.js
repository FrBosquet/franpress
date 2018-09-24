import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Icon } from '../atoms'

const Anchor = styled.a`
  cursor: pointer;
`

const IconLink = ({ type, url, width, margin }) => 
	<Anchor href={url} target='_blank'>
		<Icon type={ type } width={width} margin={margin} />
	</Anchor>

IconLink.propTypes = {
	type: PropTypes.string,
	url: PropTypes.string,
	width: PropTypes.number,
	margin: PropTypes.number
}

IconLink.defaultProps = {
	width: 30,
	margin: 0
}

export default IconLink