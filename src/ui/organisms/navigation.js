import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { NavigationEntry } from '../molecules'

const Layout = styled.div`
  position: fixed;
  bottom: 60px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: calc( (100% - 960px) / 2 );
  opacity: .15;
  transition: opacity 0.3s ease-in;

  &:hover{
    opacity: 1;
  }
`

const Navigation = ({ items }) =>
	<Layout>
		{ items.map(({ type, content, selected, onClick }, idx) => 
			<NavigationEntry 
				key={ idx }
				subtitle={ type === 'subtitle' }
				onClick={ onClick }
				title={ content }
				selected={ selected }
			/>)}
	</Layout>

Navigation.propTypes = {
	items: PropTypes.array
}

export default Navigation