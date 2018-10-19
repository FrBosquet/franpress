import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'

import Icon from './icon'
import IconList from './icons'

storiesOf('Atoms', module)
	.addDecorator(withKnobs)
	.add('icon', () => {
		const list = Object.keys(IconList)
		return <Icon 
			type={select('type',list,'logo')}
			color={text('color','#4499FF')}
			width={number('width', 100)}
			margin={number('margin', 25)}
			flip={boolean('flip', false)}
		/>
	})

