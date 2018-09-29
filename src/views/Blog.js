import { compose, setDisplayName, withProps } from 'recompose'
import Blog from '../ui/templates/blog'

const enhancer = compose(
	setDisplayName('BlogEnhanced'),
	withProps( () => ({
		title: 'Post title',
		subtitle: 'Post subtitle',
		date: '18 de Julio de 2018',
		photoAuthor: 'Aaron Burden/Unsplash',
		tags: [ 'Blog', 'React', 'Recompose' ]
	}))
)

export default enhancer(Blog)