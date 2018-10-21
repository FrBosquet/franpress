import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Icon } from '../atoms'
import InteractionOptionLabel from '../atoms/interaction-option-label'

const Anchor = styled.a`
  align-items: center;
  cursor: ${ props => props.disabled ? 'auto' : 'pointer'};
  display: flex;
	margin-right: ${props => props.gap};
`

const InteractionOption = ({ type, label, flip, onClick, disabled }) => 
	<Anchor onClick={ onClick } target='_blank' disabled={ disabled }>
		<Icon color={ disabled ? '#d5c4c7' : '#4B0013' } type={ type } width={ 32 } margin={ 5 } flip={ flip } disabled={ disabled }/>
		<InteractionOptionLabel disabled={ disabled } gap={ 10 }>{label}</InteractionOptionLabel>
	</Anchor>

InteractionOption.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.string,
	url: PropTypes.string,
	width: PropTypes.number,
	margin: PropTypes.number,
	gap: PropTypes.number,
	flip: PropTypes.bool,
	label: PropTypes.string,
	disabled: PropTypes.bool
}

InteractionOption.defaultProps = {
}

export default InteractionOption