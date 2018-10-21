import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icons from './icons'

const SpinnerSvg = styled.svg`
	isolation: isolate;
`

const Spinner = ({ width }) => {
	const Logo = Icons['spinner']
	return (
		<SpinnerSvg viewBox="0 0 100 100" width={ width } height={ width }>
			<Logo />
		</SpinnerSvg>
	)
}

Spinner.propTypes = {
	width: PropTypes.number
}

Spinner.defaultProps = {
	width: 120
}

export default Spinner