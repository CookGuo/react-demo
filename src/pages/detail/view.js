import React, { Component } from 'react'
import { connect } from 'react-redux'
import './detail.css'
import { getDetaiInfo } from './actionCreator.js'

class View extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: this.props.location.query.id
		}
	}

  render () {
    return (
      <div className="detail-cont">
      	<div className="detail-title">
      		<span>
      			<a className="detail-title-a">VOA ></a>
      		</span>
      		<span>
      			<a className="detail-title-a">VOA英语教学 ></a>
      		</span>
      		<span>
      			<a className="detail-title-a"> AS IT IS ></a>
      		</span>
      	</div>
      	<div className="detail-header">
					<h2 className="detail-header-h2">{this.props.title}</h2>
					<div className="detail-header-desc">
						<span>时间：{this.props.time}</span>
						<span>来源：<a>{this.props.from}</a></span>
						<span>收听下载次数 :{this.props.number}</span>
					</div>
      	</div>
      	<div className="detail-main">
      		<div className="detail-advertisement">
    				<a className="detaile-link" href="http://www.baidu.com">
    					<img src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKDj38HnfxDQAhiYAjIInZzqbXP9l_c" alt=""/>
    				</a>
      		</div>
      		<div className="detail-audio">
						<audio src="http://www.easyvoa.com/player.swf" controls autoPlay></audio>
						<a href="http://s2.hxen.com/m2/voa/2018/01/hxen.com_v20180111b.mp3" className="detail-download">点击下载</a>
      		</div>
      		{
      			this.props.content.map((item) => {
							return <p key={item.id} className="detail-p">{item.cont}</p>
      			})
      		}
      	</div>
      	{/*<div className="detail-friend">
      		<h3 className="detail-friend-title">VOA内容相关链接：</h3>
      		<ul>
      			{
      				this.props.friendLink.map((item) => {
      					return <li key={item.id} className="detail-friend-link"><a className="detail-friend-a">{item.title}</a></li>
      				})
      			}
      		</ul>
      	</div>*/}
        <div className="datail-right">
          <img src={require('../../common/ui/img/tiao.jpg')} alt="" />
        </div>
      </div>
    )
  }
	
	componentDidMount() {
    var id = this.props.params.id ? this.props.params.id : this.state.id
		this.props.handleGetDetail(id)
	}

}

const mapStateToProps = (state) => {
	return {
		time: state.detail.time,
		from: state.detail.from,
		number: state.detail.number,
		content: state.detail.content,
		title: state.detail.title
	}
}

const mapDispatchToProps = (dispatch) => ({
	handleGetDetail(id) {
		dispatch(getDetaiInfo(id))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(View)