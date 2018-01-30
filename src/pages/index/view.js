import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'antd'
import { Link } from 'react-router'
import { getIndexInfo } from './actionCreator.js'
import './index.css'

class View extends Component {
  render() {
    return (
      <div>
        <div className="index-cont">
            <List
              className="index-cont-header"
              size="small"
              header={this.props.contList.indexTitle}
              dataSource={this.props.contList}
              renderItem={item => (<List.Item key={item.id} className="index-cont-item"><Link to={ '/detail/' + item.id }>{item.content}</Link></List.Item>)}
            />
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.handleGetIndexInfo()
  }
}



const mapStateToProps = (state) => ({
  contList: state.index.contList
})

const mapDispatchToProps = (dispatch) => ({
  handleGetIndexInfo() {
    dispatch(getIndexInfo())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(View)