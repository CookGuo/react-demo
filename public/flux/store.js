import { EventEmitter } from 'events'

const store = Object.assign({}, EventEmitter.prototype, {
	state:{
		inputValue:'',
		list:[]
	},

	getState () {
		return this.state
	},

	changeInputValue (value) {
		this.state.inputValue = value
		console.log(value)
		this.emit('change')
	},

	addList() {
		this.state.list.push(this.state.inputValue)
		this.state.inputValue = ''
		this.emit('change')
	},

	deleteList(index) {
		this.state.list.splice(index,1)
		this.emit('change')
	}
})


export default store;