  import React, { Component } from 'react'
import { Link } from 'react-router'
import { Row, Col, Menu, Icon, List} from 'antd'
import { connect } from 'react-redux'
import { Islogin } from '../islogin/index'
import { getIndexInfo, getIsLogin } from './actionCreator.js'
import './header.css'

class View extends Component {
  render () {
    return (
      <div className="common-header">
        <Islogin/>
        <Row>
          <Col span={6}>
            <img alt="" src={require('../ui/img/logo.png')} className="header-logo"/>
          </Col>
          <Col span={18}>
            <Menu  mode="horizontal">
              {
                this.props.list.map((item, index) => {
                  return <Menu.Item key={item.id}><Link to={'/list/' + item.id}><Icon type="appstore" />{item.title}</Link></Menu.Item>
                })
              }
            </Menu>
          </Col>
        </Row>
        <Row className="header-list">
          {
            this.props.classify.map((item) => {
               return <Col span={item.number} key={item.id} className="header-classify">{item.primary}
                        <Menu  mode={item.style}>
                            { 
                              item.cont.map((items) => {
                                return <Menu.Item className="header-nav-classify" key={items.id}>{items.title}</Menu.Item>
                              })
                            }
                        </Menu>
                      </Col> 
                  })
               }
        </Row>
        <div>{this.props.children}</div>
        <div className="footer-cont">
          <List
            className="index-cont-footer"
            size="small"
            itemLayout="vertical"
            split={false}
            header={this.props.friendLink.footerTitle}
            dataSource={this.props.friendLink.footerCont}
            renderItem={item => (<List.Item key={item.id} className="footer-item"><a href={item.link}>{item.title}</a></List.Item>)}
          />
        </div>
        <div className="footer">
          <p className="first-p">
            <span>本网站由</span>
            <a href='http://www.baidu.com'>EsayVOA</a>
            <span> 开发上线 © 2011-2014</span>
            <a href='http://www.baidu.com'>手机版EsayVOA</a>
          </p>
          <p className="sectnd-p">网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>
          <img src="http://icon.users.51.la/icon_9.gif" alt=""/>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.handleHeaderList()
  }
}


const mapStateToProps = (state) => ({
  list: state.header.list,
  classify: state.header.classify,
  friendLink: state.header.friendLink
})

const mapDispatchToProps = (dispatch) => ({
  handleHeaderList() {
    dispatch(getIndexInfo())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(View)