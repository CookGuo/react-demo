import React, { Component } from 'react'
import { Icon, Modal, Button, Form, Input} from 'antd'
import { connect } from 'react-redux'
import { loginModal, CancelLoginModal, RegsiterModal, getIsLogin, isLogout,
          handleUsername, handlePassword, UserLogin, CancelRegisterModal, UserRegister } from './actionCreator'
import './islogin.css'

class Islogin extends Component {
  render () {
    const FormItem = Form.Item
    return (
      <div className="header-login">       
        <div className="header-message">{'欢迎您：' + this.props.username}</div>
        <Button type="primary" onClick={this.props.handleLogout} style={{display: this.props.islogin}}>
          退出登录
        </Button>
        <div className="btn-cont">
          <Button type="primary" onClick={this.props.showLoginModal}>
           登录
          </Button>
          <Modal
            visible={this.props.visible}
            title="登录"
            footer={[
              <Button key="back" onClick={this.props.handleLoginCancel}>取消</Button>,
              <Button key="submit" onClick={this.props.handleLoginOk} data-username={this.props.username} data-password={this.props.password}>
                登录
              </Button>
            ]}
          >
          <Form className="login-form">
            <FormItem>
              <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.props.handleInputChange} placeholder="Username" />
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" onChange={this.props.handleInputPassword} placeholder="Password" />
            </FormItem>
          </Form>
          </Modal>
        </div>
        <div className="btn-cont">
          <Button type="primary" onClick={this.props.showRegisterModal}>
            注册
          </Button>
          <Modal
            visible={this.props.register}
            title="欢迎注册新用户"
            footer={[
              <Button key="back" onClick={this.props.handleRegisterCancel}>取消</Button>,
              <Button key="submit" type="primary" onClick={this.props.handleRegisterOk} data-username={this.props.username} data-password={this.props.password}>
                注册
              </Button>,
            ]}
          >
          <Form className="login-form">
            <FormItem>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.props.handleInputChange} placeholder="Username" />
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.props.handleInputPassword} type="password" placeholder="Password" />
            </FormItem>
          </Form>
          </Modal>
        </div>
      </div>
    )
  }

  componentDidMount() {
     this.props.handleIsLogin()
  }

}




const mapStateToProps = (state) => {
  return {
    visible: state.islogin.visible,
    register: state.islogin.register,
    username: state.islogin.username,
    password: state.islogin.password,
    islogin: state.islogin.islogin
  }
}
  
const mapDispatchToProps = (dispatch) => ({
  handleIsLogin() {
    dispatch(getIsLogin())
  },
  showLoginModal() {
    dispatch(loginModal())
  },
  handleLoginCancel() {
    dispatch(CancelLoginModal())
  },
  handleInputChange(e) {
    dispatch(handleUsername(e.target.value))
  },
  handleInputPassword(e) {
    dispatch(handlePassword(e.target.value))
  },
  handleLoginOk(e) {
  let username = e.target.getAttribute('data-username')
  let password = e.target.getAttribute('data-password')
    if (username && password) {
      dispatch(UserLogin(username, password))
    } else {
      alert("请输入账号和密码")
    }
  },
  showRegisterModal() {
    dispatch(RegsiterModal())
  },
  handleRegisterCancel() {
    dispatch(CancelRegisterModal())
  },
  handleRegisterOk(e) {
  let username = e.target.getAttribute('data-username')
  let password = e.target.getAttribute('data-password')
    if (username && password) {
        dispatch(UserRegister(username, password))
      } else {
        alert("请输入账号和密码")
      }
  },
  handleLogout() {
    dispatch(isLogout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Islogin)