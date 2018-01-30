const db = require('../base/base');

const list = db.model("list", {
	id: String,
	title: String
});

const getHeader = (callback) => {
	list.find({}).then((result) => {
		callback(result)
	})
}

module.exports = {
	getHeader
}