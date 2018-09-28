import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Icon } from '../atoms'
import InteractionOptionLabel from '../atoms/interaction-option-label'

const Anchor = styled.a`
  align-items: center;
  cursor: pointer;
  display: flex;
	margin-right: ${props => props.gap};
`

const InteractionOption = ({ type, label, flip }) => 
	<Anchor target='_blank' >
		<Icon type={ type } width={32} margin={5} flip={flip}/>
		<InteractionOptionLabel gap={10}>{label}</InteractionOptionLabel>
	</Anchor>

InteractionOption.propTypes = {
	type: PropTypes.string,
	url: PropTypes.string,
	width: PropTypes.number,
	margin: PropTypes.number,
	gap: PropTypes.number,
	flip: PropTypes.bool,
	label: PropTypes.string
}

InteractionOption.defaultProps = {
}

export default InteractionOption