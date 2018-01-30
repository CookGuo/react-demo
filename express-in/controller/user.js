const ModelUser = require("../model/user.js")

const login = (req, res) => {
	const { username, password } = req.body
	ModelUser.userLogin({
		username: username,
		password: password
	}, (result) => {
		if (result) {
			req.session.username = username
			res.json({
				"ret":true,
				"data":{
					"login":true,
					username: username
				}
			})
		} else {
			res.json({
				"ret":true,
				"data":{
					"login":false
				}
			})
		}
	})
}


const register = (req, res) => {
	const { username, password } = req.body
	ModelUser.addUser(username, password, () => {
		res.json({
			"ret":true,
			"data":{
				"register":true
			}
		})
	})
}

const isLogin = (req, res) => {
	if (req.session.username) {
		res.json({
			ret: true,
			data: {
				isLogin: true,
				username: req.session.username
			}
		})
	} else {
		res.json({
			ret: true,
			data: {
				isLogin: false
			}
		})
	}
}

const isLogout = (req, res) => {
	console.log(req.session)
	if (req.session) {
		req.session = null
		res.json({
			ret: true,
			data: {
				isLogin: false,
				username: "请登录！"
			}
		})
	}
}

module.exports = {
	login,
	register,
	isLogin,
	isLogout
}