import React from 'react'
import styled from 'styled-components'
import { Icon } from '../atoms'
import { InlineText } from '../atoms/label'

const CopyLayout = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: calc( (100% - 960px) / 2 );
  transition: opacity 0.3s ease-in;

  &:hover{
    opacity: 1;
  }
`

const Copy = () =>
	<CopyLayout>
		<InlineText>Copyright Fran Bosquet 2018</InlineText>
		<Icon width={ 20 } margin={ 10 }/>
	</CopyLayout>

export default Copy