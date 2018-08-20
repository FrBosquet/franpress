import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Icon } from '../atoms'

const Anchor = styled.a`
  cursor: pointer;
`

const IconLink = ({ type, url }) => 
	<Anchor href={url} target='_blank'>
		<Icon type={ type } width='30' margin='0' />
	</Anchor>

IconLink.propTypes = {
	type: PropTypes.string,
	url: PropTypes.string
}

export default IconLink