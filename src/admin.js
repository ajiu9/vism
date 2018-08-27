import React from 'react'
import {Layout, Row, Col } from 'antd'
import Header from 'components/Header'
import Footer from 'components/Footer'
import NavLeft from 'components/NavLeft'
import Home from 'pages/home'
import 'style/common.less'

export default class Admin extends React.Component {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Layout>
        <Row className="container">
          <Col span="3" className="nav-left">
            <NavLeft></NavLeft>
          </Col>
          <Col span="21" className="main">
            <Header></Header>
            <Row  className="content">
              <Home></Home>
            </Row>
            <Footer></Footer>
          </Col>
        </Row>
      </Layout>
    )
  }
}