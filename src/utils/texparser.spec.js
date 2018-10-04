import { getTree, get, set, goUp, goRight, goLeft } from './textparser'

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

describe('Setter', () => {
	let target

	beforeEach(() => {
		target = []
	})

	test('sets first level content', () => {
		set(target, '0', 'content', 'value')
		expect(target).toEqual([ { content: 'value' } ])
	})

	test('sets second level content', () => {
		set(target, '0.0', 'content', 'value')
		expect(target).toEqual([ { content: [ { content: 'value' } ] } ])
	})

	test('sets third level content', () => {
		set(target, '0.0.0', 'content', 'value')
		expect(target).toEqual([ { content: [ { content: [ { content: 'value' } ] } ] } ])
	})

	test('sets first level non first content', () => {
		set(target, '3', 'content', 'value')
		expect(target).toEqual([ undefined, undefined, undefined, { content: 'value' } ])
	})

	test('sets second level type', () => {
		set(target, '0.0', 'type', 'link')
		expect(target).toEqual([ { content: [ { type: 'link' } ] } ])
	})

	test('sets second level type in an already existing content', () => {
		set(target, '0.0', 'content', 'value')
		set(target, '0.0', 'type', 'link')
		expect(target).toEqual([ { content: [ { type: 'link', content: 'value' } ] } ])
	})

	test('sets second level content in an already existing type', () => {
		set(target, '0', 'type', 'bold')
		set(target, '0.0', 'content', 'value')
		expect(target).toEqual([ { type: 'bold', content: [ {  content: 'value' } ] } ])
	})

	test('sets second level type in an already existing nested content', () => {
		set(target, '0.0.0', 'content', 'value')
		set(target, '0.0', 'type', 'link')
		expect(target).toEqual([ { content: [ { type: 'link', content: [ { content: 'value' } ] } ] } ])
	})
})

describe('Navigate', () => {
	test('navigate up in level 0', () => {
		expect(goUp('0')).toBe('1')
	})

	test('navigate up in level 1', () => {
		expect(goUp('0.1')).toBe('0.2')
	})

	test('navigate up in level 6', () => {
		expect(goUp('0.1.2.3.1.2')).toBe('0.1.2.3.1.3')
	})

	test('navigate right in level 0', () => {
		expect(goRight('0')).toBe('0.0')
	})

	test('navigate left in level 1', () => {
		expect(goLeft('0.5')).toBe('0')
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

	test('nest a bold into a link', () => {
		const content = 'H24^B^bold link··'
		expect(getTree(content)).toEqual([ {
			type: 'link',
			content: [ {
				type: 'bold',
				content: 'bold link'
			} ]
		} ])
	})

	test('two bolds in a row', () => {
		const content = 'B^bold one·B^bold two·'
		expect(getTree(content)).toEqual([ {
			type: 'bold',
			content: 'bold one'
		},{
			type: 'bold',
			content: 'bold two'
		} ])
	})

	test('plain text, then bold, then link, then italics', () => {
		const content = 'plainB^bold·H3^link·I^italic·'
		expect(getTree(content)).toEqual([ {
			type: 'text',
			content: 'plain'
		},{
			type: 'bold',
			content: 'bold'
		},{
			type: 'link',
			content: 'link'
		},{
			type: 'italic',
			content: 'italic'
		} ])
	})
})