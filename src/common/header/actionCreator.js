import { INDEX_INFO } from './actionTypes.js'

const getIndexMessage = (data) => {
	return {
		type: INDEX_INFO,
	  	list: data.headerList,
	  	classify: data.classify,
	  	friendLink: data.friendLink
	}
}


export const getIndexInfo = () => {
	return (dispatch) => {
		fetch("/header/nav")
			.then((res) => (res.json()))
			.then((res) => {
				const data = JSON.parse(res.data[0].message)
				dispatch(getIndexMessage(data.data))
			})
			.catch((err) => {
				console.log(err)
			})
	}
}
