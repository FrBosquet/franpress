import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'

import FadeScreen from './fade-screen'
import PostList from './post-list'

storiesOf('Organisms', module)
	.addDecorator(withKnobs)
	.add('fade screen', () => {
		return <FadeScreen
			faded={ boolean('Faded', false) }
		/>
	})
	.add('post list', () => {
		return <PostList
			open={ boolean('Open', false) }
		/>
	})
