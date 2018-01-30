import { CONT_LIST } from './actionTypes.js'

const stateDefault = {
  contList: []
}

export default (state = stateDefault, action) => {
  const { type, contList } = action
  switch (type) {
  	case CONT_LIST: 
  		return {
  			contList: contList
  		}
    default: return state
  }
}