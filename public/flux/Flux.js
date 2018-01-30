import React from 'react'
import store from './store'
import FulxUi from './FluxUi'
import { getInputChangeAction, getAddItemAction, deleteItemAction} from './actionCreator'
import dispatcher from './dispatcher'

export default class Fulx extends React.Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleBtnDelete = this.handleBtnDelete.bind(this)
		store.on('change', this.handleStoreChange.bind(this))
	}
	render () {
		return <FulxUi
				list={this.state.list}
				inputValue={this.state.inputValue}
				handleBtnDelete={this.handleBtnDelete}
				handleInputChange={this.handleInputChange}
				handleBtnClick={this.handleBtnClick}
				/>
	}

	handleInputChange(e) {
		const action = getInputChangeAction(e.target.value)
		dispatcher.dispatch(action)
	}

	handleStoreChange() {
		this.setState(store.getState())
	}
	
	handleBtnClick() {
		const action = getAddItemAction()
		dispatcher.dispatch(action)
	}

	handleBtnDelete(e) {
		const action = deleteItemAction(parseInt(e.target.getAttribute('data-index'), 10))
		dispatcher.dispatch(action)
	}
}