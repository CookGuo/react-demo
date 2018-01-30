import { LOGIN_SHOW, LOGIN_CANCEL, ISLOGON, LOGIN_USERNAME, LOGIN_PASSWORD, REGISTER_SHOW, REGISTER_CANCEL, LOGIN_ERR } from './actionType.js'

export const loginModal = () => ({
	type: LOGIN_SHOW,
	visible: true
})

export const CancelLoginModal = () => ({
	type: LOGIN_CANCEL,
	visible: false
})

export const RegsiterModal = () => ({
	type: REGISTER_SHOW,
	register: true
})

export const CancelRegisterModal = () => ({
	type: REGISTER_CANCEL,
	register: false
})

export const handleUsername = (value) => ({
	type: LOGIN_USERNAME,
	username: value
})

export const handlePassword = (value) => ({
	type: LOGIN_PASSWORD,
	password: value
})

const getLoginMessage = (mess) => ({
	type: LOGIN_ERR,
	username: mess
})

const isLogin = (value) => {
	var val = value
	val ? (val = "inline-block") : (val = "none")
	return {
		type: ISLOGON,
		islogin: val
	}
}

export const UserLogin = (username, password) => {
	return (dispatch) => {
		fetch('/islogin/login', {
	        method: 'POST',
	        credentials: 'same-origin',
	        headers: {
	          'Accept': 'application/json',
	          'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
	          username: username,
	          password: password
	        })
	    })
	    .then((res) => {
	    	setTimeout(()=>{
	    		dispatch(CancelLoginModal())
	    	}, 300)
	    	return res.json()
	    })
	    .then((res) => {
	    	if (res.data.login) {
	    		dispatch(isLogin(res.data.login))
	    		dispatch(getLoginMessage(res.data.username))
	    	} else {
	    		dispatch(getLoginMessage("登录失败！请注册!"))
	    	}
	    })
	    .catch((err)=>{
	      	console.log(err)
      	})
    }
}


export const UserRegister = (username, password) => {
	return (dispatch) => {
		fetch('/islogin/register', {
	        method: 'POST',
	        headers: {
	          'Accept': 'application/json',
	          'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
	          username: username,
	          password: password
	        })
	    })
	    .then((res) => {
	    	setTimeout(()=>{
	    		dispatch(CancelRegisterModal())
	    	}, 300)
	    })
	    .catch((err)=>{
	      	console.log(err)
      	})
    }
}


export const getIsLogin = () => {
	return (dispatch) => {
		fetch('/islogin/islogin',  {
			method: 'POST',
        	credentials: 'same-origin'
    	})
    	.then((res) => (res.json()))
    	.then((res) => {
    			console.log(res)
    		if (res.data.isLogin) {
    			dispatch(isLogin(res.data.isLogin))
    			dispatch(getLoginMessage(res.data.username))
    		}
    	})
	}
}

export const isLogout = () => {
	return (dispatch) => {
		fetch('/islogin/islogout',  {
			method: 'POST',
        	credentials: 'same-origin'
    	})
    	.then((res) => (res.json()))
    	.then((res) => {
    		console.log(res)
    		if (!res.data.isLogin) {
    			dispatch(isLogin(res.data.isLogin))
    			dispatch(getLoginMessage(res.data.username))
    		}
    	})
	}
}