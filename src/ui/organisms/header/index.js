import React from 'react'
import styled from 'styled-components'

import HeaderLogo from '../../molecules/header-logo'

const HeaderLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
	display: flex;
	height: 80px;
  flex-direction: row;
	justify-content: space-between;
	align-items: center;
  background: linear-gradient(to bottom, rgba(235,235,235,0.2) 0%, rgba(0,0,0,0) 100%);
`
const Header = () => (
	<HeaderLayout>
		<HeaderLogo />
		<h1>subtitle</h1>
	</HeaderLayout>
)

export default Header
