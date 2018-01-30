import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './list.css'
import { getListInfo } from './actionCreator.js'

class View extends Component {
  render() {
    return (
      <div className="list-content">
        <div className="list-img-box">
          <img className="img-left" src="http://www.easyvoa.com/templets/images/studioclassroom/studio_logo.png" alt=""/>
          <img className="img-right" src="http://www.easyvoa.com/templets/images/studioclassroom/studio_ad.gif" alt=""/>
        </div>
        <div className="list-header">
          <ul className="list-header-ul">
            <li className="list-header-li">
              <a className="list-header-a" href="http://www.baidu.com">大家说英语</a>
            </li>
            <li className="list-header-li">
              <a className="list-header-a" href="http://www.baidu.com">空中英语教室</a>
            </li>
            <li className="list-header-li">
              <a className="list-header-a" href="http://www.baidu.com">彭蒙惠英语</a>
            </li>
          </ul>
        </div>
        <div className="list-cont">
          <div className="list-left">
            <img className="list-img-title" src="http://www.easyvoa.com/templets/images/studioclassroom/sc_title.png" alt=""/>
            <div className="list-cont-header">
              <div className="list-cont-imgbox">
                <img src="http://www.easyvoa.com/templets/images/studioclassroom/sc_cover1.jpg" alt=""/>
                <img src="http://www.easyvoa.com/templets/images/studioclassroom/sc_cover1.jpg" alt=""/>
                <img src="http://www.easyvoa.com/templets/images/studioclassroom/sc_cover1.jpg" alt=""/>
              </div>
              <h2 className="list-cont-title">往期试听:</h2>
            </div>
            <ul>
              {
                this.props.content.map((item) => {
                  return <li key={item.id} className="list-cont-li"><Link to={"/detail/content?id=" + item.id}>{item.content}></Link></li>
                })
              }
            </ul>
          </div>
          <div className="list-right">
            <h2 className="list-right-h2">杂志展示</h2>
            <img src="http://www.easyvoa.com/templets/images/studioclassroom/sc_mag.png" alt=""/>
            <h2 className="list-right-h2">视屏展示</h2>
            <p>
          《空中英语教室》（StudioClassroom）为”空中英语教室“系列的“中级版杂志”,多年获得“亚洲最佳英语教学奖”

            杂志每月一刊，每日为一个学习单元，对应一篇课文和一个MP3.

          《空中英语教室》适合于中级的英文学习者，对口语和听力阅读的提高有非常好的帮助。

            <span className="list-span">《空中英语教室》的所有内容，全部由外教讲解，超级地道！</span> 

            小编学习这套杂志多年，觉得非常有必要把这本杂志推荐给大家。不过，为保护原版杂志的版权，左边只能给大家分享一些往期的杂志样例了。

            如果大家喜欢这本杂志，需要空中英语教室2014年最新的学习资料的相关信息，可以加入EasyVOA提供给大家的 <span className="list-span">空英学习交流QQ群：115390136</span>

            关于《空中英语教室》的学习材料真的是超级丰富，从这本杂志开始发行，到现在，可能已经超过50年了，通过这本杂志，小编觉得，你不仅仅可以学好英语，还可以学到更多文化底蕴哦～
            </p>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.handleGetListInfo(this.props.params.id)
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.list.content
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetListInfo(id) {
      dispatch(getListInfo(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(View)