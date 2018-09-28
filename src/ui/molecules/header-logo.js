import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon, HeaderLogoTitle } from '../atoms'

const HeaderLogoWrapper = styled.div`
	display: flex;
	box-sizing: border-box;
  flex-direction: row;
	justify-content: flex-start;
	align-items: center;
  margin: 10px;
`

const HeaderLogo = ({ dark }) => (
	<HeaderLogoWrapper>
		<Icon type='logo' width={60} margin={0} color={dark ? '#292929' : '#EBEBEB'}/>
		<HeaderLogoTitle space={15} color={dark ? '#292929' : '#931A38'}>Fran</HeaderLogoTitle>
		<HeaderLogoTitle space={10} color={dark ? '#292929' : '#EBEBEB'}>Bosquet</HeaderLogoTitle>
	</HeaderLogoWrapper>
)

HeaderLogo.propTypes = {
	dark: PropTypes.bool
}

export default HeaderLogo
