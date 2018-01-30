import { LOGIN_SHOW, LOGIN_CANCEL, ISLOGON, LOGIN_USERNAME, LOGIN_PASSWORD, REGISTER_SHOW, REGISTER_CANCEL, LOGIN_ERR } from './actionType'

const stateDefault = {
	islogin: '',
	visible: false,
	register: false,
	username: '',
	password: ''
}

export default (state = stateDefault, action) => {
	switch (action.type) {
		case LOGIN_SHOW:
			return {
				islogin: state.islogin,				
				visible: action.visible,
				register: state.register,
				username: state.username,
				password: state.password
			}
		case LOGIN_CANCEL:
			return {
				islogin: state.islogin,
				visible: action.visible,
				register: state.register,
				username: state.username,
				password: state.password
			}
		case LOGIN_USERNAME:
			return {
				islogin: state.islogin,
				visible: state.visible,
				register: state.register,
				username: action.username,
				password: state.password
			}
		case LOGIN_PASSWORD:
			return {
				islogin: state.islogin,
				visible: state.visible,
				register: state.register,
				username: state.username,
				password: action.password
			}
		case REGISTER_SHOW:
			return {
				islogin: state.islogin,
				visible: state.visible,
				register: action.register,
				username: state.username,
				password: state.password
			}
		case REGISTER_CANCEL:
			return {
				islogin: state.islogin,
				visible: state.visible,
				register: action.register,
				username: state.username,
				password: state.password
			}
		case LOGIN_ERR:
			return {
				islogin: state.islogin,
				visible: state.visible,
				register: state.register,
				username: action.username,
				password: state.password
			}
		case ISLOGON:
			return {
				visible: state.visible,
				register: state.register,
				username: action.username,
				password: state.password,
				islogin: action.islogin
			}				
		default: return state
	}
}