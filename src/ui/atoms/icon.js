import React from 'react'
import PropTypes from 'prop-types'
import Icons from './icons'

const Icon = ({ width, margin, color, type, flip }) => {
	const DesiredIcon = Icons[type] || Icons['logo']
	return (
		<svg style={{ isolation: 'isolate', margin, transform: flip ? 'rotate(180deg)' : '' }} viewBox="0 0 100 100" width={ width } height={ width }>
			<DesiredIcon color={ color }/>
		</svg>
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
