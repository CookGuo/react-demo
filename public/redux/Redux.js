import React, { Component} from 'react'
import store from './store'
import { getInputValueChange, getAddItem, getDeleteItem } from './actionCreator'

export default class Redux extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this)
    store.subscribe(this.handleUpdate)
  }

  render () {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange}/>
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}<span onClick={this.handleDeleteBtn} data-index={index}>删除</span></li>
            })
          }
        </ul>
      </div>
    )
  }

  handleInputChange (e) {
    store.dispatch(getInputValueChange(e.target.value))
  }

  handleUpdate () {
    this.setState(store.getState())
  }

  handleBtnClick () {
    store.dispatch(getAddItem())
  }

  handleDeleteBtn (e) {
    store.dispatch(getDeleteItem(e.target.getAttribute('data-index')))
  }
}
