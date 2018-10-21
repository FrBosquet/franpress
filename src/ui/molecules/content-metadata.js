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

const ContentMetadata = ({ tags, date, photoAuthor }) => (
	<ContentMetadataLayout>
		<ContentMetadataLabel>{ date }</ContentMetadataLabel>
		<ContentMetadataLabel align='center'>Foto por {photoAuthor}</ContentMetadataLabel>
		<ContentMetadataLabel align='flex-end'>
			{ tags.map(tag => <ContentMetadataTag key={ tag }>{tag}</ContentMetadataTag> ) }
		</ContentMetadataLabel>
	</ContentMetadataLayout>
)

ContentMetadata.propTypes = {
	date: PropTypes.string,
	photoAuthor: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string)
}

ContentMetadata.defaultProps = {
	tags: [ ]
}

export default ContentMetadata