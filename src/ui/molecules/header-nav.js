import React from 'react'
import PropTypes from 'prop-types'
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

const HeaderNav = ({ dark }) => (
	<HeaderNavWrapper>
		<HeaderNavLink color={ dark ? '#292929' : '#931A38' }>Portafolio</HeaderNavLink>
		<HeaderNavLink selected color={ dark ? '#292929' : '#931A38' }>Blog</HeaderNavLink>
		<HeaderNavLink color={ dark ? '#292929' : '#931A38' }>Contacto</HeaderNavLink>
		<IconLink type='github' url='http://github.com' margin={ 10 } gap={ 20 } color={ dark ? '#292929' : '#931A38' }/>
		<IconLink type='linkedin' url='http://linkedin.com' margin={ 10 } gap={ 20 } color={ dark ? '#292929' : '#931A38' }/>
		<IconLink type='twitter' url='http://twitter.com' margin={ 10 } color={ dark ? '#292929' : '#931A38' }/>
	</HeaderNavWrapper>
)

HeaderNav.propTypes = {
	dark: PropTypes.bool
}

export default HeaderNav
