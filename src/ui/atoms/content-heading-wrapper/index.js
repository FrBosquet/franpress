import styled from 'styled-components'

const ContentHeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 960px;
	height: 490px;
	background: linear-gradient(
		to bottom,
		rgba(235, 235, 235, 0.2) 0%,
		rgba(235, 235, 235, 1) 100%
	);
	padding: 20px;

	& > h1 {
		color: #931a38;
		text-align: center;
		font-size: 72px;
		font-weight: normal;
		font-family: 'Oswald', sans-serif;
		text-shadow: 2px 1px 2px #464646;
		margin: 0;
		min-height: 215px;
	}

	& > h2 {
		color: #931a38;
		font-family: 'Cabin', sans-serif;
		font-weight: normal;
		font-size: 18px;
		text-shadow: 2px 1px 2px #464646;
	}
`

export default ContentHeadingWrapper
