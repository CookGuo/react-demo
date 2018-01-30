import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
      super(props)
      this.handleDelete = this.handleDelete.bind(this)
    }

    render () {
      return (
          <li>{this.props.item}<span data-index={this.props.index} onClick={this.handleDelete}>删除</span></li>
        )
    }

    handleDelete (e) {
      const index = parseInt(e.target.getAttribute('data-index'), 10)
      this.props.handleDelete(index)
    }
} 