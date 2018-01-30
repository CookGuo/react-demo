const db = require('../base/base');

const Index = db.model("index", {
	id: String,
	content: String
})

const getIndexInfo = (callback) => {
	Index.find({}).then((result) => {
		callback(result)
	})
}

module.exports = {
	getIndexInfo
}