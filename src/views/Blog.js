import React, { Fragment } from 'react'
import { compose, setDisplayName, withProps, withStateHandlers, lifecycle } from 'recompose'

import Blog from '../ui/templates/blog'
import { getTree } from '../utils/textparser'

import { ContentBodyTitle, ContentBodyParagraph, ContentBodyList, ContentBodySubtitle } from '../ui/atoms'
import ContentBodyImage from '../ui/atoms/content-body-image'
import { withPost } from '../modules/post/hocs'

const parseBranch = ({ type, content, asset }, idx) => {
	switch(type){
	case 'bold': return <strong key={idx}>{Array.isArray(content) ? content.map(parseBranch) : content}</strong>
	case 'link': return <a key={idx} href={asset} target='_blank' rel='noopener noreferrer'>{Array.isArray(content) ? content.map(parseBranch) : content}</a>
	case 'italic': return <em key={idx}>{Array.isArray(content) ? content.map(parseBranch) : content}</em>
	case 'text': return <Fragment key={idx}>{content}</Fragment>
	}
}

const mapTextToNodes = (content, assets) => getTree(content, assets).map(parseBranch)

const mapContentToNodes = ({ type, content, assets, items }, idx) => {
	switch(type){
	case 'title':	return <ContentBodyTitle id={content.replace(' ', '').toLowerCase()} key={idx}>{content}</ContentBodyTitle>
	case 'subtitle': return <ContentBodySubtitle id={content.replace(' ', '').toLowerCase()} key={idx}>{content}</ContentBodySubtitle>
	case 'paragraph':	return <ContentBodyParagraph key={idx}>{mapTextToNodes(content, assets)}</ContentBodyParagraph>
	case 'list': return <ContentBodyList key={idx} content={items}/>
	case 'image': return <ContentBodyImage key={idx} url={assets[0]} caption={content}/>
	}
}

const mapContentToNavigation = content => {
	return content
		.filter(({ type }) => type === 'title' || type === 'subtitle')
		.map(({ type, content }) => ({ 
			type, 
			content, 
			id: content.toLowerCase().replace(' ', '') }))
}

const enhancer = compose(
	setDisplayName('BlogEnhanced'),
	withPost,
	withProps( ({ content }) => ({
		content: <Fragment>{content.map(mapContentToNodes)}</Fragment>,
		navigation: mapContentToNavigation(content)
	})),
	withStateHandlers({ selected: null, darkHeader: false }, {
		setSelected: () => id => ({ selected: id }),
		setDarkHeader: () => state => ({ darkHeader: state })
	}),
	lifecycle({
		componentDidMount(){
			const { navigation } = this.props
			if( !navigation.length ) return

			const heights = navigation.map(({ id }) => ({
				id,
				height: document.getElementById(id).offsetTop
			}))

			document.addEventListener('scroll', event => {
				const { selected, setSelected, darkHeader, setDarkHeader } = this.props
				const position = event.target.scrollingElement.scrollTop
				const currentId = heights.find(({ height }) => height  >= position -10).id

				if(currentId !== selected) setSelected(currentId)
				if(position >= 510 && !darkHeader) setDarkHeader(true)
				if(position < 510 && darkHeader) setDarkHeader(false)
			})

			this.props.setSelected(heights[0].id)
		}
	}),
	withProps(({ navigation, selected }) => ({
		navigation: navigation.map(({ type, content, id }) => ({ 
			type,	content, id,
			selected: id === selected,
			onClick: () =>	document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' })
		}))
	}))
)

export default enhancer(Blog)