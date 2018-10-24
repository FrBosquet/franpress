const Datastore = require('nedb')
const dbPath = './db/db.dat'

const db = new Datastore({
	filename: dbPath,
	autoload: true
})

export const savePost = postData => {
	return new Promise((resolve, reject) => {
		db.insert(postData, (err, post) => {
			if(err) reject(err)
			resolve(post)
		})
	})
}