import React from 'react';
import Item from './Item'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[],
      inputValue:''
    }
    this.handleClickBtn = this.handleClickBtn.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  render() {

    const list = this.state.list.map((item, index) => {
              return <Item
                      key={index}
                      item={item}
                      index={index}
                      handleDelete={this.handleDelete}
                      />
            })

    return (
      <div>
        <input onChange={this.handleInputChange} value={this.state.inputValue}/>
        <button onClick={this.handleClickBtn}>提交</button>
        <ul>
          {list}
        </ul>
      </div>
    )
  }

  handleClickBtn (e) {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleDelete (index) {
    const arr = [...this.state.list]
    arr.splice(index, 1)
    this.setState({
      list: arr
    })
  }


}

export default App;
