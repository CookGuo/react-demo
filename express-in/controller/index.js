const indexInfo = require('../model/index');

const getIndexInfo = (req, res) => {
	indexInfo.getIndexInfo((result) => {
		if (result) {
			res.json({
				ret: true,
				data: result
			})
		}
	})
}

module.exports = {
	getIndexInfo
}