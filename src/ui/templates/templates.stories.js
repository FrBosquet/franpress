import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'

import Blog from './blog'

storiesOf('Templates', module)
	.addDecorator(withKnobs)
	.add('fade screen', () => {
		return <Blog
			content={ [] }
			tags={ [] }
			navigation={ [] }
			fetching={ boolean('fetching', false) }
		/>
	})
