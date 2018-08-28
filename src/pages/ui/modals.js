import React from 'react'
import {Card, Button, Modal} from 'antd'
import './index.less'

export default class Modals extends React.Component {
  state = {
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false
  }
  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }
  handleCancel = (type) => {
    this.setState({
      [type]: false
    })
  }
  handleConfirm =(type) => {
    Modal[type]({
      title: '确认',
      content:"不进则退？",
      onCancel() {
        console.log('取消')
      },
      onOk() {
        console.log('确认')
      }
    })
  }
  render() {
    return (
      <div className="content-wrapper">
        <Card title="基础模态框">
          <Button type="primary" onClick={() =>{this.handleOpen('visible1')}}>open</Button>
          <Button type="primary" onClick={() =>{this.handleOpen('visible2')}}>自定义页脚</Button>
          <Button type="primary" onClick={() =>{this.handleOpen('visible3')}}>顶部20px</Button>
          <Button type="primary" onClick={() =>{this.handleOpen('visible4')}}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框">
          <Button type="primary" onClick={() =>{this.handleConfirm('confirm')}}>confirm</Button>
          <Button type="primary" onClick={() =>{this.handleConfirm('info')}}>info</Button>
          <Button type="primary" onClick={() =>{this.handleConfirm('success')}}>success</Button>
          <Button type="primary" onClick={() =>{this.handleConfirm('warning')}}>warning</Button>
          <Button type="primary" onClick={() =>{this.handleConfirm('error')}}>error</Button>
        </Card>
        <Modal
          title="Basic Modal"
          visible={this.state.visible1}
          onCancel={() => {this.handleCancel('visible1')}}
        >
          <p>学如逆水行舟？</p>
        </Modal>
        <Modal
          title="自定义页脚"
          okText="好的"
          cancelText="算了"
          visible={this.state.visible2}
          onCancel={() => {this.handleCancel('visible2')}}
        >
          <p>学如逆水行舟？</p>
        </Modal>
        <Modal
          title="顶部20px"
          visible={this.state.visible3}
          style={{ top: 20 }}
          onCancel={() => {this.handleCancel('visible3')}}
        >
          <p>学如逆水行舟？</p>
        </Modal>
        <Modal
          title="水平垂直居中"
          visible={this.state.visible4}
          centered
          onCancel={() => {this.handleCancel('visible4')}}
        >
          <p>学如逆水行舟？</p>
        </Modal>
      </div>
    )
  }
}