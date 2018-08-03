import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { sideBars } from '../../atoms/mixins'
import ContentMetadataLabel from '../../atoms/content-metadata-label';

const ContentMetadataLayout = styled.div`
  display: grid;
  grid-template-columns: 33% auto 33%;
  box-sizing: border-box;
  height: 45px;
	width: 960px;
  margin: auto;
  ${ sideBars }
`

const ContentMetadata = ({ aProp }) => (
  <ContentMetadataLayout>
    <ContentMetadataLabel>18 de Julio de 2018</ContentMetadataLabel>
    <ContentMetadataLabel align='center'>Foto por Aaron Burden/Unsplash</ContentMetadataLabel>
    <ContentMetadataLabel>{ aProp }</ContentMetadataLabel>
  </ContentMetadataLayout>
)

ContentMetadata.propTypes = {
  aProp: PropTypes.string,
}

ContentMetadata.defaultProps = {
  aProp: 'value'
}

export default ContentMetadata