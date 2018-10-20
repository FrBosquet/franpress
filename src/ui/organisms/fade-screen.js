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
	background: url('assets/images/noise.png');
	opacity: ${ props => props.faded ? 0 : 1};
	transition: opacity .5s ease-in;
	display: flex;
	justify-content: center;
	align-items: center;
`

const FadeScreen = ({ faded }) => (
	<FadeScreenLayout faded={faded}>
		<Spinner />
	</FadeScreenLayout>
)

FadeScreen.propTypes = {
	faded: PropTypes.bool
}

export default FadeScreen