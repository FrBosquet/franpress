import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderNavLink = styled.button`
  background: ${props => props.selected ? props.color : 'none'};
  border: none;
  box-shadow: ${props => props.selected && '2px 2px 2px #464646'};
  color: ${props => props.selected ? 'white' : props.color};
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  font-size: 24px;
  font-weight: 400;
  margin: ${props => props.selected && '0px 10px'};
  padding: 7px 10px;
  text-align: center;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  transition: all 0.4s ease-in;
`

HeaderNavLink.propTypes = {
	color: PropTypes.string,
	selected: PropTypes.bool
}

HeaderNavLink.defaultProps = {
	color: '#931A38'
}

export default HeaderNavLink
