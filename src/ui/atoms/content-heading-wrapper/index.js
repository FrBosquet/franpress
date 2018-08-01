import styled from 'styled-components'

const ContentHeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 960px;
	height: 490px;
	background: linear-gradient(
		to bottom,
		rgba(235, 235, 235, 0.2) 10%,
		rgba(235, 235, 235, 1) 100%
	);
	padding: 20px;
	box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.65);
	box-sizing: border-box;
	border-left: 2px solid rgba(146, 26, 56, 0.2);
	border-right: 2px solid rgba(146, 26, 56, 0.2);
`

export default ContentHeadingWrapper
