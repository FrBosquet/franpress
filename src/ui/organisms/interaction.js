import React from 'react'
import styled from 'styled-components'

import { InteractionOption } from '../molecules'

const Layout = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: calc( (100% - 960px) / 2 );
  opacity: .15;
  transition: opacity 0.3s ease-in;

  &:hover{
    opacity: 1;
  }
`

const Navigation = () =>
	<Layout>
		<InteractionOption label='compartir' type='twitter' />
		<InteractionOption label='compartir' type='facebook' />
		<InteractionOption label='comentarios' type='buble' />
		<InteractionOption label='entrada anterior' type='arrow' />
		<InteractionOption label='siguiente entrada' type='arrow' flip/>
		<InteractionOption label='lista de entradas' type='bullets' />
	</Layout>

export default Navigation