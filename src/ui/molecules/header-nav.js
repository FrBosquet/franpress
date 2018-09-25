import React from 'react'
import styled from 'styled-components'

import IconLink from './icon-link'
import { HeaderNavLink } from '../atoms'

const HeaderNavWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 0px;
`

const HeaderNav = () => (
	<HeaderNavWrapper>
		<HeaderNavLink>Portafolio</HeaderNavLink>
		<HeaderNavLink selected>Blog</HeaderNavLink>
		<HeaderNavLink>Contacto</HeaderNavLink>
		<IconLink type='github' url='http://github.com' margin={10} gap={20}/>
		<IconLink type='linkedin' url='http://linkedin.com' margin={10} gap={20}/>
		<IconLink type='twitter' url='http://twitter.com' margin={10}/>
	</HeaderNavWrapper>
)

export default HeaderNav
