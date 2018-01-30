const getDetailInfo = require('../model/detail');


const getDetail = (req, res) => {

	const { id } = req.query
	getDetailInfo.getDetail({
		id: id
	}, (result) => {
		if (result) {
			res.json({
				ret: true,
				data: result
			})
		}
	})
}


module.exports = {
	getDetail
}