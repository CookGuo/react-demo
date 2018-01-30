import { GETDETAIL_INFO } from './actionType.js'

const getDetailMessage = (res) => {
	return {
		type: GETDETAIL_INFO,
		time: res.time,
		from: res.from,
		number: res.number,
		content: JSON.parse(res.content),
		title: res.title
	}
}

export const getDetaiInfo = (id) => {
	return (dispatch) => {
		fetch('/detail/content?id=' + id)
		.then((res)=>(res.json()))
		.then((res)=>{
			dispatch(getDetailMessage(res.data))
		})
	}
}