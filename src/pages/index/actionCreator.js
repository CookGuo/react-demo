import { CONT_LIST } from './actionTypes.js'


const getIndexMessage = (message) => {
	return {
		type:CONT_LIST,
		contList: message
	}
}


export const getIndexInfo = () => {
	return (dispatch) => {
		fetch('/index/content')
     .then((res)=>(res.json()))
     .then((res) => {
        console.log(res)
     	dispatch(getIndexMessage(res.data))
    })
     .catch((err) => {
     	 console.log(err)
    })
  }
}

