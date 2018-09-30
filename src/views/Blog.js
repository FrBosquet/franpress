import { compose, setDisplayName, withProps } from 'recompose'

import mockData from './mockPost.json'
import Blog from '../ui/templates/blog'

const enhancer = compose(
	setDisplayName('BlogEnhanced'),
	withProps( () => ({
		title: 'Post title',
		subtitle: 'Post subtitle',
		date: '18 de Julio de 2018',
		photoAuthor: 'Aaron Burden/Unsplash',
		tags: [ 'Blog', 'React', 'Recompose' ],
		postContent: mockData
	}))
)

export default enhancer(Blog)