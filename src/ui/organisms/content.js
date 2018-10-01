import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { ContentBodyParagraph, ContentBodyTitle, ContentBodyList, ContentBodySubtitle } from '../atoms'
import { ContentHeading, ContentMetadata, ContentBody } from '../molecules'
import ContentBodyImage from '../atoms/content-body-image'

const mapTextToNodes = content => {
	return content.split('#').map((chunk, idx) => {
		//Its a link?
		if(/\((.*)\)/.test(chunk)){
			const [ url, label ] = chunk.replace(/\(|\)|'/g, '').split(',')
			return <a key={idx} href={url} target='_blank' rel='noopener noreferrer'>{label}</a>
		}

		//Its bold?
		if(/\[(.*)\]/.test(chunk)){
			return <strong key={idx}>{chunk.replace(/\[|\]/g, '')}</strong>
		}

		//Its italics?
		if(/\{(.*)\}/.test(chunk)){
			return <em key={idx}>{chunk.replace(/\{|\}/g, '')}</em>
		}

		return <Fragment key={idx}>{chunk}</Fragment>
	})
}

const mapElementToNode = ({ type, content }, idx) => {
	switch(type){
	case 'title':	return <ContentBodyTitle key={idx}>{content}</ContentBodyTitle>
	case 'paragraph':	return <ContentBodyParagraph key={idx}>{mapTextToNodes(content)}</ContentBodyParagraph>
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
