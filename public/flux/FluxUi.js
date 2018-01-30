import React from 'react'

export default class FluxUi extends React.Component {
  render() {
      const list  = this.props.list.map((item,index)=>{
        return <li key={index}><span onClick={this.props.handleBtnDelete} data-index={index}>删除</span>{item}</li>
      })

    return (
      <div>
        <input value={this.props.inputValue} onChange={this.props.handleInputChange}/>
        <button onClick={this.props.handleBtnClick}>提交</button>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}