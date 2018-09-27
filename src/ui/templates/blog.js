import React from 'react'

import { Content, Header, Navigation, Interaction } from '../organisms'
import { Copy } from '../organisms/copy'
import { Shadows } from '../organisms/shadows'

const Blog = () => (
	<div>
		<Header />
		<Shadows />
		<Content />
		<Navigation />
		<Interaction />
		<Copy />
	</div>
)

export default Blog
