import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderLogoTitle = styled.h1`
  color: ${props => props.color};
  margin-left: ${props => props.space + 'px'}
  text-align: center;
  font-size: 36px;
  font-weight: 300;
  font-family: 'Oswald', sans-serif;
`

HeaderLogoTitle.propTypes = {
	color: PropTypes.string,
	space: PropTypes.number
}

HeaderLogoTitle.defaultProps = {
	color: '#931A38',
	space: 0
}

export default HeaderLogoTitle
