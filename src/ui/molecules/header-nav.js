import React from 'react'
import styled from 'styled-components'

import IconLink from './icon-link'

const HeaderNavWrapper = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 10px;
`

const HeaderNav = () => (
	<HeaderNavWrapper>
        <IconLink type='github' url='http://github.com' margin={20}/>
        <IconLink type='linkedin' url='http://linkedin.com' margin={20}/>
        <IconLink type='twitter' url='http://twitter.com'/>
	</HeaderNavWrapper>
)

export default HeaderNav
