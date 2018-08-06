import React from 'react'
import PropTypes from 'prop-types'
import Icons from './icons'

const Icon = ({ width, margin, color, svg, type }) => {
	const DesiredIcon = Icons[type] || Icons['logo']
	return (
		<svg style={{ isolation: 'isolate', margin }} viewBox="0 0 100 100" width={ width } height={ width }>
			<DesiredIcon color={ color }/>
		</svg>
	)
}


Icon.propTypes = {
	type: PropTypes.string,
	color: PropTypes.string,
	width: PropTypes.number,
	margin: PropTypes.number,
}

Icon.defaultProps = {
	type: 'logo',
	width: 70,
	margin: 25
}

export default Icon
