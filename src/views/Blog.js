import React, { Fragment } from 'react'
import { compose, setDisplayName, withProps } from 'recompose'

import mockData from './mockPost.json'
import Blog from '../ui/templates/blog'
import { getTree } from '../utils/textparser'

import { ContentBodyTitle, ContentBodyParagraph, ContentBodyList, ContentBodySubtitle } from '../ui/atoms'
import ContentBodyImage from '../ui/atoms/content-body-image'

const parseBranch = ({ type, content, asset }, idx) => {
	switch(type){
	case 'bold': return <strong key={idx}>{Array.isArray(content) ? content.map(parseBranch) : content}</strong>
	case 'link': return <a key={idx} href={asset} target='_blank' rel='noopener noreferrer'>{Array.isArray(content) ? content.map(parseBranch) : content}</a>
	case 'italic': return <em key={idx}>{Array.isArray(content) ? content.map(parseBranch) : content}</em>
	case 'text': return <Fragment key={idx}>{content}</Fragment>
	}
}

const mapTextToNodes = (content, assets) => getTree(content, assets).map(parseBranch)

const mapContentToNodes = ({ type, content, assets }, idx) => {
	switch(type){
	case 'title':	return <ContentBodyTitle key={idx}>{content}</ContentBodyTitle>
	case 'paragraph':	return <ContentBodyParagraph key={idx}>{mapTextToNodes(content, assets)}</ContentBodyParagraph>
	case 'list': return <ContentBodyList key={idx} content={content}/>
	case 'subtitle': return <ContentBodySubtitle key={idx}>{content}</ContentBodySubtitle>
	case 'image': return <ContentBodyImage key={idx} content={content}/>
	}
}

const enhancer = compose(
	setDisplayName('BlogEnhanced'),
	withProps( () => ({
		title: 'Post title',
		subtitle: 'Post subtitle',
		date: '18 de Julio de 2018',
		photoAuthor: 'Aaron Burden/Unsplash',
		tags: [ 'Blog', 'React', 'Recompose' ],
		content: <Fragment>{mockData.map(mapContentToNodes)}</Fragment>,
		navigation: [
			{ type: 'title', content: 'Section 1', id:'section1' },
			{ type: 'subtitle', content: 'Subsection 1', id:'subsection1' },
			{ type: 'subtitle', content: 'Subsection 2', id:'subsection2' },
			{ type: 'title', content: 'Section 2', id:'section2' },
			{ type: 'subtitle', content: 'Subsection 3', id:'subsection3' },
			{ type: 'subtitle', content: 'Subsection 4', id:'subsection4' }
		]
	}))
)

export default enhancer(Blog)