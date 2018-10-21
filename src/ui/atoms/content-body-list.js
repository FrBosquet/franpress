import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContentBodyListLayout = styled.ul`
  font-family: 'Cabin', sans-serif;
  font-size: 18px;
  color: #292929;
  
  & li{

  }
  `
const ContentBodyList = ({ content }) => <ContentBodyListLayout>
	{ content.map((label, idx) => <li key={ idx }>{label}</li>)}
</ContentBodyListLayout>

ContentBodyList.propTypes = {
	content: PropTypes.arrayOf(PropTypes.string)
}

export default ContentBodyList