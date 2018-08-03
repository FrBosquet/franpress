import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContentMetadataLabel = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${ props => props.align };
	box-sizing: border-box;
	margin: 10px;
	font-family: 'Cabin', sans-serif;
	font-size: 14px;
	font-weight: bold;
	color: #4B0013;
`

ContentMetadataLabel.propTypes = {
	align: PropTypes.string
}

ContentMetadataLabel.defaultProps = {
	align: 'left'
}

export default ContentMetadataLabel
