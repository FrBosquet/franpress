const CONTENT = 'content'
const TYPE = 'type'
const TEXT = 'text'
const BOLD = 'bold'
const LINK = 'link'
const ITALIC = 'italic'
const CLOSE = 'close'
const ASSET = 'asset'

const close = /·/
const splitRegex = /H\d+\^|I\^|B\^|·/g
const boldRegex = /B\^/g
const linkRegex = /H\d+\^/
const assetRegex = /\d+/
const italicRegex = /I\^/

const getType = text => {
	if(text.search(boldRegex) === 0) return BOLD
	if(text.search(linkRegex) === 0) return LINK
	if(text.search(italicRegex) === 0) return ITALIC
	if(text.search(close) === 0) return CLOSE
	return TEXT
}

const isLast = (arr, idx) => idx === arr.length - 1
const isObject = target => typeof target !== 'object'
const isEmptyObject = obj => Object.keys(obj).length === 0
const isNotEmptyObject = obj => !isEmptyObject(obj)
const isLink = type => type === LINK

const getAssetIndex = tag => tag.match(assetRegex)[0]
const extractTags = text => text.match(splitRegex) || []
const extractContent = text => text.split(splitRegex)

const merge = text => {
	const tags = extractTags(text)
	const contents = extractContent(text)
	
	return contents
		.reduce((chain, content, idx) => [
			...chain,
			content,
			tags[idx] ]
			, [])
		.filter(value => value && value !=='')
}

export const get = (arr, path) => 
	path.split('.').reduce((target, route) => {
		if(!Array.isArray(target)) target = target.content
		return target[route]
	}, arr)

export const set = (arr, path, field, value) => {
	const target = path.split('.').reduce((trg, route, idx, arr) => {
		const lastElement = isLast(arr, idx)
		
		if(!trg[route]) trg[route] = lastElement ? {} : { content: [] }
		
		if(lastElement){
			return trg[route]
		}else{
			if(!trg[route].content) trg[route].content = []
			if(isObject(trg[route].content)) trg[route].content = []
			return trg[route].content 
		}
	}, arr)
	
	target[field] = value

	return arr
}

export const goRight = path => `${path}.0`
export const goLeft = path => path.slice(0, path.length - 2)
export const goUp = path => {
	const splitPath = path.split('.')
	let change = +splitPath.pop() + 1
	if(splitPath.length === 0) return `${change}`
	return `${splitPath.join('.')}.${change}`
}

const mutateTree = assets => (tree, mutator) => {
	let { content, pointer } = tree
	const type = getType(mutator)
	const current = get(content, pointer)

	switch(type){
	case TEXT:
		set(content, pointer, CONTENT, mutator )
		if(!get(content, pointer).type)	set(content, pointer, TYPE, TEXT )
		break
	case CLOSE:
		pointer = current ?
			goUp(pointer) :
			goUp(goLeft(pointer))
		break
	case BOLD:
	case ITALIC:
	case LINK:
	default:
		if(current && current.type){
			switch(current.type){
			case TEXT:
				pointer = goUp(pointer)
				break
			case BOLD:
			case ITALIC:
			case LINK:
			default:
				pointer = goRight(pointer)

				if(current.content) {
					set(content, pointer, CONTENT, current.content )
					set(content, pointer, TYPE, TEXT )
					pointer = goUp(pointer)
				}
			}
		}
		set(content, pointer, TYPE, type )

		if(isLink(type)){
			assets && set(content, pointer, ASSET, assets[getAssetIndex(mutator)])
		}
	}
	return { content, pointer }
}

export const getTree = (text, assets) => 
	merge(text)
		.reduce(mutateTree(assets), { content: [ {} ],	pointer: '0' })
		.content
		.filter(isNotEmptyObject)