import styled from 'styled-components'
import PropTypes from 'prop-types'

const Icon = styled.img`
	width: ${ props => props.width};
	margin: ${ props => props.margin};
`

Icon.propTypes = {
	width: PropTypes.number,
	margin: PropTypes.number,
}

Icon.defaultProps = {
	width: 70,
	margin: 25
}

export default Icon
