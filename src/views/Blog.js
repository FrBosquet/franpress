import React, { Fragment } from 'react'
import { compose, setDisplayName, withProps, withStateHandlers, lifecycle } from 'recompose'

import Blog from '../ui/templates/blog'

import { withPost } from '../modules/post/hocs'
import { mapContentToNodes, mapContentToNavigation } from '../utils/content'

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