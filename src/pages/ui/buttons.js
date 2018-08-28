import React from 'react'
import {Card, Button, Radio, Icon} from 'antd'
import './index.less'

export default class Bottons extends React.Component {
  state = {
    loading: true,
    size: 'default'
  }

 handleCloseLoading = () => {
  this.setState({
    loading: false
  })
 }
 handleChange = (e) => {
   this.setState({
     size: e.target.value
   })
 }
  render() {
    return (
      <div className="content-wrapper">
        <Card title="基础按钮">
          <Button type="primary">primary</Button>
          <Button>default</Button>
          <Button type="dashed">dashed</Button>
          <Button type="danger">danger</Button>
          <Button disabled>danger</Button>
        </Card>
        <Card title="图标按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button shape="circle" icon="search"></Button>
          <Button icon="delete">删除</Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="loading按钮">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组合">
          <Button.Group>
          <Button type="primary" icon="left" style={{marginRight:0}}>返回</Button>
          <Button type="primary">前进 <Icon type="right"/></Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸">
          <Radio.Group onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>primary</Button>
          <Button size={this.state.size}>default</Button>
          <Button type="dashed" size={this.state.size}>dashed</Button>
          <Button type="danger" size={this.state.size}>danger</Button>
          <Button disabled size={this.state.size}>danger</Button>
        </Card>
      </div>
    )
  }
}