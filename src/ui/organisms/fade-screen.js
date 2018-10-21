import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Spinner } from '../atoms'

const FadeScreenLayout = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: url('/assets/images/noise.png');
	opacity: ${ props => props.faded ? 1 : 0};
	transition: opacity .25s ease-in;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none;
`

const FadeScreen = ({ faded }) => (
	<FadeScreenLayout faded={ faded }>
		<Spinner />
	</FadeScreenLayout>
)

FadeScreen.propTypes = {
	faded: PropTypes.bool
}

FadeScreen.defaultProps = {
	faded: false
}

export default FadeScreen