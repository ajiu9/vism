import React from 'react'
import {Card, Button, message} from 'antd'
import './index.less'

export default class Messages extends React.Component {
  showMessage = (type) => {
    const hide = message[type] ('这是一个信息全局提示框', 0)
    setTimeout(hide, 2500);
  }
  render() {
    return (
      <div className="content-wrapper">
        <Card title="全局提示框">
          <Button type="primary" onClick={() => {this.showMessage('success')}}>success</Button>
          <Button type="primary" onClick={() => {this.showMessage('error')}}>error</Button>
          <Button type="primary" onClick={() => {this.showMessage('info')}}>info</Button>
          <Button type="primary" onClick={() => {this.showMessage('warn')}}>warn</Button>
          <Button type="primary" onClick={() => {this.showMessage('loading')}}>open</Button>
        </Card>
      </div>
    )
  }
}