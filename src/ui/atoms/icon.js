import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icons from './icons'

const SVG = styled.svg`
	fill: ${props => props.color};
	isolation: isolate;
	margin: ${props => props.margin}px;
	transform: ${props => props.flip ? 'rotate(180deg)' : ''};

	transition: all 0.4s ease-in;
`

SVG.defaultProps = {
	color: '#931A38'
}

const Icon = ({ width, margin, color, type, flip }) => {
	const DesiredIcon = Icons[type] || Icons['logo']
	return (
		<SVG color={ color } margin={ margin } flip={ flip } viewBox="0 0 100 100" width={ width } height={ width }>
			<DesiredIcon color={ color }/>
		</SVG>
	)
}


Icon.propTypes = {
	type: PropTypes.string,
	color: PropTypes.string,
	width: PropTypes.number,
	margin: PropTypes.number,
	flip: PropTypes.bool
}

Icon.defaultProps = {
	type: 'logo',
	width: 70,
	margin: 25
}

export default Icon
