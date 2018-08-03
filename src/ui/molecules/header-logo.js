import React from 'react'
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

const HeaderLogo = () => (
	<HeaderLogoWrapper>
		<Icon src='assets/images/blog-logo-white.svg' width={60} margin={0}/>
		<HeaderLogoTitle space={15}>Fran</HeaderLogoTitle>
		<HeaderLogoTitle space={10} color='#EBEBEB'>Bosquet</HeaderLogoTitle>
	</HeaderLogoWrapper>
)

export default HeaderLogo
