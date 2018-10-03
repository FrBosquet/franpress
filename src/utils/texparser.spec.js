import { getTree, get, set } from './textparser'

const tree = [
	{
		type: 'bold',
		content: 'bold text'
	},
	{
		type: 'text',
		content: 'simple text'
	},
	{
		type: 'link',
		content: 'link text'
	},
	{
		type: 'italic',
		content: [
			{
				type: 'text',
				content: 'nested text'
			},
			{
				type: 'bold',
				content: [
					{
						type: 'link',
						content: 'nested nested link text'
					},
					{
						type: 'text',
						content: 'nested nested text'
					}
				]
			}
		]
	}
  
]

describe('Getter', () => {
	test('gets first level object', () => {
		expect(get(tree, '0')).toEqual({
			type: 'bold',
			content: 'bold text'
		})
	})
  
	test('gets second level object', () => {
		expect(get(tree, '3.0')).toEqual({
			type: 'text',
			content: 'nested text'
		})
	})
  
	test('gets third level object', () => {
		expect(get(tree, '3.1.1')).toEqual({
			type: 'text',
			content: 'nested nested text'
		})
	})
})

describe('setter', () => {
	let target

	beforeEach(() => {
		target = []
	})

	test('sets first level value', () => {
		set(target, '0', { content: 'value', type: 'text' })
		expect(target).toEqual([ { content: 'value', type: 'text' } ])
	})

})

describe('Get tree',() => {
	test('parse plain text', () => {
		const content = 'plain text'
		expect(getTree(content)).toEqual([ {
			type: 'text',
			content
		} ])
	})

	test('parse bold text', () => {
		const content = 'B^bold text·'
		expect(getTree(content)).toEqual([ {
			type: 'bold',
			content: 'bold text'
		} ])
	})

	test('parse italic text', () => {
		const content = 'I^italic text·'
		expect(getTree(content)).toEqual([ {
			type: 'italic',
			content: 'italic text'
		} ])
	})
  
	test('parse link text', () => {
		const content = 'H24^link text·'
		expect(getTree(content)).toEqual([ {
			type: 'link',
			content: 'link text'
		} ])
	})

	// test('nest a bold into a link', () => {
	// 	const content = 'H24^B^bold link··'
	// 	expect(getTree(content)).toEqual([ {
	// 		type: 'link',
	// 		content: [ {
	// 			type: 'bold',
	// 			content: 'bold link'
	// 		} ]
	// 	} ])
	// })
})