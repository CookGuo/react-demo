import { Dispatcher } from 'flux'
import { INPUT_CHANGE, LIST_ADD, LIST_DELETE } from './actionsTypes'
import store from './store'

const dispatcher = new Dispatcher();

dispatcher.register(({type, value, index}) => {
	if (type === INPUT_CHANGE ) {
		console.log(111)
		store.changeInputValue(value)
	} else if (type === LIST_ADD ) {
		store.addList()
	} else if (type === LIST_DELETE) {
		store.deleteList(index)
	}
})

export default dispatcher