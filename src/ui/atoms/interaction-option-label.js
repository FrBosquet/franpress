import styled from 'styled-components'

const InteractionOptionLabel = styled.span`
  font-family: 'Barlow', sans-serif;
  color: #4B0013;
  font-size: 14px;
  font-weight: 700;
  margin: 5px 0px;
  text-transform: uppercase;
  margin-left: ${props => props.gap}
  `

export default InteractionOptionLabel