import React from 'react'
import {Card, Button, notification } from 'antd'
import './index.less'

export default class Bottons extends React.Component {
  openNotification = (type, placement) => {
    if (placement) {
      notification.config({
        placement: placement
      })
    }
    notification[type]({
      message: '您好',
      description: '欢迎您来到视与界后台管理系统。',
    })
  }
  render() {
    return (
      <div className="content-wrapper">
        <Card title="通知提醒框">
          <Button type="primary" onClick={() => {this.openNotification('success')}}>success</Button>
          <Button type="primary" onClick={() => {this.openNotification('error')}}>error</Button>
          <Button type="primary" onClick={() => {this.openNotification('info')}}>info</Button>
          <Button type="primary" onClick={() => {this.openNotification('warn')}}>warn</Button>
          <Button type="primary" onClick={() => {this.openNotification('open')}}>open</Button>
        </Card>
        <Card title="通知提醒框">
          <Button type="primary" onClick={() => {this.openNotification('success', 'topLeft')}}>success</Button>
          <Button type="primary" onClick={() => {this.openNotification('error', 'topRight')}}>error</Button>
          <Button type="primary" onClick={() => {this.openNotification('info', 'bottomLeft')}}>info</Button>
          <Button type="primary" onClick={() => {this.openNotification('warn', 'bottomRight')}}>warning</Button>
        </Card>
      </div>
    )
  }
}