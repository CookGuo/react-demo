const db = require('../base/base.js');

var users = db.model('users', {
	username: String,
	password: String
})

const addUser = ( username, password, callback ) => {
	const user = new users ({
		username : username,
		password : password
	});
	
	user.save().then((result) => {
		callback(result);
	});
};


const userLogin = (userInfo = {}, callback) => {
	users.findOne(userInfo).then((result) => {
		callback(result);
	})
}


module.exports = {
	userLogin,
	addUser
}
