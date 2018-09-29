import { compose, setDisplayName, withProps } from 'recompose'
import Blog from '../ui/templates/blog'

const enhancer = compose(
	setDisplayName('BlogEnhanced'),
	withProps( () => ({
		title: 'Post title',
		subtitle: 'Post subtitle'
	}))
)

export default enhancer(Blog)