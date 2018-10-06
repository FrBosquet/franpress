import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { getTree } from '../../utils/textparser'
import { ContentBodyParagraph, ContentBodyTitle, ContentBodyList, ContentBodySubtitle } from '../atoms'
import { ContentHeading, ContentMetadata, ContentBody } from '../molecules'
import ContentBodyImage from '../atoms/content-body-image'

const parseBranch = ({ type, content, asset }, idx) => {
	switch(type){
	case 'bold': return <strong key={idx}>{Array.isArray(content) ? content.map(parseBranch) : content}</strong>
	case 'link': return <a key={idx} href={asset} target='_blank' rel='noopener noreferrer'>{Array.isArray(content) ? content.map(parseBranch) : content}</a>
	case 'italic': return <em key={idx}>{Array.isArray(content) ? content.map(parseBranch) : content}</em>
	case 'text': return <Fragment key={idx}>{content}</Fragment>
	}
}

const mapTextToNodes = (content, assets) => getTree(content, assets).map(parseBranch)

const mapElementToNode = ({ type, content, assets }, idx) => {
	switch(type){
	case 'title':	return <ContentBodyTitle key={idx}>{content}</ContentBodyTitle>
	case 'paragraph':	return <ContentBodyParagraph key={idx}>{mapTextToNodes(content, assets)}</ContentBodyParagraph>
	case 'list': return <ContentBodyList key={idx} content={content}/>
	case 'subtitle': return <ContentBodySubtitle key={idx}>{content}</ContentBodySubtitle>
	case 'image': return <ContentBodyImage key={idx} content={content}/>
	}
}

const Content = ({ title, subtitle, date, photoAuthor, tags, postContent }) => (
	<div>
		<ContentHeading
			title={ title }
			subtitle={ subtitle }
		/>
		<ContentMetadata 
			date={date}
			photoAuthor={photoAuthor}
			tags={tags}
		/>
		<ContentBody>
			{
				postContent.map(mapElementToNode)
			}
		</ContentBody>
	</div>
)

Content.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	date: PropTypes.string,
	photoAuthor: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string),
	postContent: PropTypes.array
}

export default Content
