import { INDEX_INFO } from './actionTypes.js'

const stateDefault = {
  list: [],
  classify: [],
  friendLink: {}
}

export default (state = stateDefault, action) => {
  const { type } = action
  switch (type) {
  	case INDEX_INFO: {
  		return {
  			list: action.list,
        classify: action.classify,
        friendLink: action.friendLink
  		}
  	}
    default: return state
  }
}