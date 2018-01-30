const db = require('../base/base');

const Detail = db.model('detail', {
	id: String,
	time: String,
	from: String,
	number: String,
	title: String,
	content: String
})

const getDetail = (id = {}, callback) => {
	Detail.findOne(id).then((result) => {
		callback(result)
	})
}

module.exports = {
	getDetail
}