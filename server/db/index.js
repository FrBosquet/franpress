const Datastore = require('nedb')
const dbPath = './server/db/db.dat'

const db = new Datastore({
	filename: dbPath,
	autoload: true
})

module.exports.savePost = postData => {
	return new Promise((resolve, reject) => {
		const injectedData = {
			...postData,
			date: postData.date || `${Date.now()}`,
			_id: postData.id,
			id: undefined
		}

		db.insert(injectedData, (err, post) => {
			if(err) reject(err)
			resolve({ ...post, id: post._id, _id: undefined })
		})
	})
}

module.exports.getPost = id => {
	return new Promise((resolve, reject) => {
		db.findOne({ _id: id }, (err, post) => {
			if(err) reject(err)			
			resolve({ ...post, id: post._id, _id: undefined })
		})
	})
}

module.exports.getSortedPosts = () => {
	return new Promise((resolve, reject) => {
		db.find({}, (err, posts) => {
			if(err) reject(err)			
			resolve(posts
				.sort((a,b) => a.date < b.date ? 1 : -1)
				.map((post, idx, array) => ({
					...post,
					nextPost: idx !== 0 ? array[idx -1].id : null,
					prevPost: idx < array.length - 1 ? array[idx+1].id : null,
					id: post._id,
					_id: undefined
				})))
		})
	})
}