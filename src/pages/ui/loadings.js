import React from 'react'
import {Card, Icon, Spin, Alert} from 'antd'
import './index.less'

export default class Loadings extends React.Component {
  
  render() {
    const icon = <Icon type="loading" spin></Icon>
    return (
      <div className="content-wrapper">
        <Card title="Spin用法">
          <Spin size="small"></Spin>
          <Spin size="large" indicator={icon} style={{margin: "0 20px"}}></Spin>
          <Spin size="large"></Spin>
        </Card>
        <Card title="内容遮罩">
          <Alert
            message="react"
            description="视与界后台管理系统"
            type="warning"
            style={{marginBottom: 10}}
          />
          <Spin>
            <Alert
              message="react"
              description="视与界后台管理系统"
              type="warning"
              style={{marginBottom: 10}}
            />
          </Spin>
          <Spin indicator={icon} tip="加载中..."  size="large">
            <Alert
              message="react"
              description="视与界后台管理系统"
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}