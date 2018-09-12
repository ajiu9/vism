import React from 'react'
import {NavLink} from 'react-router-dom'
import { Menu } from 'antd'
import { connect } from 'react-redux'
import { switchMenu, saveBtnList } from './../../redux/action'
import menuConfig from 'config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu


class NavLeft extends React.Component {
  state = {
    currentKey: ''
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig)
    let currentkey = window.location.hash.replace(/#|\?.*$/g, '')
    this.setState({
      currentkey,
      menuTreeNode
    })
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key} title={item.title}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }
  handleClick = ({item, key}) => {
    // 事件派发，自动调用reducer，通过reducer保存到store对象中
    const { dispatch } = this.props

    dispatch(switchMenu(item.props.title))
    this.setState({
      currentkey: key
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>视与界</h1>
        </div>
        <Menu
          onClick={this.handleClick}
          selectedKeys = {this.state.currentkey}
          theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

export default connect()(NavLeft)