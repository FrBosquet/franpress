const posts = require('./posts.json')
const { savePost } = require('./db/index')

posts.forEach(post => {
	savePost(post)
})