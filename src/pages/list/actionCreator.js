import { GETLISTINFO } from './actionType.js'

export const getListMessage = (res) => ({
	type: GETLISTINFO,
	content: res
})

export const getListInfo = (id) => {
	return (dispatch) => {
		fetch('/index/content?id=' + id)
		.then((res) => (res.json()))
		.then((res)=>{
			console.log(res)
			dispatch(getListMessage(res.data))
		})
	} 
}

