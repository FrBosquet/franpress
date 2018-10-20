import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'

import FadeScreen from './fade-screen'

storiesOf('Organisms', module)
	.addDecorator(withKnobs)
	.add('fade screen', () => {
		return <FadeScreen
			faded={boolean('Faded', false)}
		/>
	})
