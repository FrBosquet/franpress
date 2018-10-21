import React, { Fragment } from 'react'
import { getTree } from './textparser'
import { ContentBodyTitle, ContentBodySubtitle, ContentBodyParagraph, ContentBodyList } from '../ui/atoms'
import ContentBodyImage from '../ui/atoms/content-body-image'

export const parseBranch = ({ type, content, asset }, idx) => {
	switch(type){
	case 'bold': return <strong key={ idx }>{Array.isArray(content) ? content.map(parseBranch) : content}</strong>
	case 'link': return <a key={ idx } href={ asset } target='_blank' rel='noopener noreferrer'>{Array.isArray(content) ? content.map(parseBranch) : content}</a>
	case 'italic': return <em key={ idx }>{Array.isArray(content) ? content.map(parseBranch) : content}</em>
	case 'text': return <Fragment key={ idx }>{content}</Fragment>
	}
}

export const mapTextToNodes = (content, assets) => getTree(content, assets).map(parseBranch)

export const mapContentToNodes = ({ type, content, assets, items }, idx) => {
	switch(type){
	case 'title':	return <ContentBodyTitle id={ content.replace(' ', '').toLowerCase() } key={ idx }>{content}</ContentBodyTitle>
	case 'subtitle': return <ContentBodySubtitle id={ content.replace(' ', '').toLowerCase() } key={ idx }>{content}</ContentBodySubtitle>
	case 'paragraph':	return <ContentBodyParagraph key={ idx }>{mapTextToNodes(content, assets)}</ContentBodyParagraph>
	case 'list': return <ContentBodyList key={ idx } content={ items }/>
	case 'image': return <ContentBodyImage key={ idx } url={ assets[0] } caption={ content }/>
	}
}

export const mapContentToNavigation = content => {
	return content
		.filter(({ type }) => type === 'title' || type === 'subtitle')
		.map(({ type, content }) => ({ 
			type, 
			content, 
			id: content.toLowerCase().replace(' ', '') }))
}