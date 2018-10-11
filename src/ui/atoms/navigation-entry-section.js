import styled, { css } from 'styled-components'

const selected = css`
    background-color: #931A38;
    color: #EBEBEB;
    padding-left: 15px;
`

const Atom = styled.button`
  width: 135px;
  padding-left: 10px;
  cursor: pointer;
  background: none;
  border: none;
  color: #931A38;
  text-align: left;
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  font-size: 14px;
  transition: all 0.4s ease-in;

  &:focus{
    outline: #931A38 auto 5px;
  }

  ${ props => props.selected && selected}
`

export default Atom