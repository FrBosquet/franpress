import React, { Fragment } from 'react'
import { compose, setDisplayName, withProps, withStateHandlers, lifecycle } from 'recompose'

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
	case 'title':	return <ContentBodyTitle id={content.replace(' ', '').toLowerCase()} key={idx}>{content}</ContentBodyTitle>
	case 'subtitle': return <ContentBodySubtitle id={content.replace(' ', '').toLowerCase()} key={idx}>{content}</ContentBodySubtitle>
	case 'paragraph':	return <ContentBodyParagraph key={idx}>{mapTextToNodes(content, assets)}</ContentBodyParagraph>
	case 'list': return <ContentBodyList key={idx} content={content}/>
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
			{ type: 'title', content: 'Section 2', id:'section2' },
			{ type: 'subtitle', content: 'Subsection 2', id:'subsection2' },
			{ type: 'subtitle', content: 'Subsection 3', id:'subsection3' },
		]
	})),
	withStateHandlers({ selected: null, darkHeader: false }, {
		setSelected: () => id => ({ selected: id }),
		setDarkHeader: () => state => ({ darkHeader: state })
	}),
	lifecycle({
		componentDidMount(){
			const heights = this.props.navigation.map(({ id }) => ({
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