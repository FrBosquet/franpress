import React from 'react'
import styled from 'styled-components'

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
`
const Header = () => (
	<HeaderLayout>
		<h1>title</h1>
		<h1>subtitle</h1>
	</HeaderLayout>
)

export default Header
