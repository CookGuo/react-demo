import { GETDETAIL_INFO } from './actionType.js'

const stateDefault = {
	time: '',
	from: '',
	number: '',
	content: [],
	title: ''
}

export default (state = stateDefault, action) => {
	const { time, from, number, content, title } = action
	switch(action.type) {
		case GETDETAIL_INFO:
			return {
				time: time,
				from: from,
				number: number,
				content: content,
				title: title
			}
		default: return state
	}
}