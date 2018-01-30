const headerInfo = require('../model/header');

const getHeader = (req, res) => {
	headerInfo.getHeader((result) => {
		if (result) {
			res.json({
				"ret":true,
				"data": result
			})
		}
	})
}

module.exports = {
	getHeader
}