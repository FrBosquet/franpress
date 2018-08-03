import styled from 'styled-components'
import { sideBars } from './mixins'

const ContentHeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 960px;
	height: 490px;
	background: linear-gradient(
		to bottom,
		rgba(235, 235, 235, 0.3) 10%,
		rgba(235, 235, 235, 1) 100%
	);
	padding: 20px;
	box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.65);
	box-sizing: border-box;
	${ sideBars }
`

export default ContentHeadingWrapper
