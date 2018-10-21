import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Icon } from '../atoms'

const Anchor = styled.a`
  cursor: pointer;
	margin-right: ${props => props.gap};
`

const IconLink = ({ type, url, width, margin, gap, color }) => 
	<Anchor href={ url } target='_blank' gap={ gap }>
		<Icon type={ type } width={ width } margin={ margin } color={ color } />
	</Anchor>

IconLink.propTypes = {
	type: PropTypes.string,
	url: PropTypes.string,
	width: PropTypes.number,
	margin: PropTypes.number,
	gap: PropTypes.number,
	color: PropTypes.string
}

IconLink.defaultProps = {
	width: 30,
	margin: 0
}

export default IconLink