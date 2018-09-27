import React from 'react'
import styled from 'styled-components'

const ShadowsLayout = styled.div`
  position: absolute;
  top: 560px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
const Shadow = styled.div`
  width: calc(( 100% - 960px ) / 2);
  height: 5px;
  background: none;
  box-shadow: 0 -5px 5px rgba(0,0,0,0.15);
`

export const Shadows = () =>
	<ShadowsLayout>
		<Shadow />
		<Shadow />
	</ShadowsLayout>
