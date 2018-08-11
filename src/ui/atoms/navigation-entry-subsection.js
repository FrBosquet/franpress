import styled, { css } from 'styled-components'

const selected = css`
    background-color: #4B0013;
    color: #EBEBEB;
    padding-left: 20px;
`

const Atom = styled.button`
  width: 135px;
  padding-left: 15px;
  cursor: pointer;
  border: none;
  background-color: #EBEBEB;
  color: #4B0013;
  text-align: left;
  font-family: 'Oswald';
  font-weight: 200;
  font-size: 14px;
  transition: all 0.2s ease-in;

  ${ props => props.selected && selected}
`

export default Atom