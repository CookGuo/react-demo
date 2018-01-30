import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Reducer as isloginReducer } from '../common/islogin/index.js'
import { Reducer as detailReducer } from '../pages/detail/index.js'
import { Reducer as headerReducer } from '../common/header/index.js'
import { Reducer as indexReducer } from '../pages/index/index.js'
import { Reducer as listReducer } from '../pages/list/index.js'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const reducer = combineReducers({
	header: headerReducer,
	index: indexReducer,
	list: listReducer,
	detail: detailReducer,
	islogin: isloginReducer,
	routing: routerReducer
})


const store = createStore(reducer, compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) 

export default store