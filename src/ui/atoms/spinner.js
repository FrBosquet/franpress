import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icons from './icons'

const SpinnerSvg = styled.svg`
  @keyframes fillColor {
    0% {fill: #931A38;}
    25% {fill: #A1481D;}
    50% {fill: #701464;}
    100% {fill: #931A38;}
  }

	animation-name: fillColor;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
	isolation: isolate;
`

const Spinner = ({ width }) => {
	const Logo = Icons['logo']
	return (
		<SpinnerSvg viewBox="0 0 100 100" width={ width } height={ width }>
			<Logo/>
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