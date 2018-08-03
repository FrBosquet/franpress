import React from 'react'

import { ContentHeading, ContentMetadata } from '../molecules'

const Content = () => (
	<div>
		<ContentHeading
			title="Crea una React App sin Create&#8209;React&#8209;App"
			subtitle="Subtitulo de la entrada relativamente aun mas largo para que salte a la siguiente línea"
		/>
		<ContentMetadata />
	</div>
)

export default Content
