import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { sideBars, centerBlock } from '../mixins'
import {
	ContentMetadataLabel,
	ContentMetadataTag
} from '../atoms'

const ContentMetadataLayout = styled.div`
  display: grid;
  grid-template-columns: 33% auto 33%;
  height: 45px;
  ${ centerBlock }
  ${ sideBars }
`

const ContentMetadata = ({ tags }) => (
	<ContentMetadataLayout>
		<ContentMetadataLabel>18 de Julio de 2018</ContentMetadataLabel>
		<ContentMetadataLabel align='center'>Foto por Aaron Burden/Unsplash</ContentMetadataLabel>
		<ContentMetadataLabel align='flex-end'>
			{ tags.map(tag => <ContentMetadataTag key={tag}>{tag}</ContentMetadataTag> ) }
		</ContentMetadataLabel>
	</ContentMetadataLayout>
)

ContentMetadata.propTypes = {
	tags: PropTypes.array,
}

ContentMetadata.defaultProps = {
	tags: [ 'blog', 'react' ]
}

export default ContentMetadata