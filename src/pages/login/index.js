import React from 'react'
import {Card, Form, Input, Button} from 'antd'

const FormItem = Form.Item
// import './index.less'

export default class FromLogin extends React.Component {
 
  render() {
    return (
      <div className="home-wrapper">
        <Card title="登录行内表单">
          <Form>
            <FormItem>
             <Input placeholder="用户名"/>
            </FormItem>
            <FormItem>
              <Input placeholder="密码"/>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.loginSubmit} className="login-form-button">
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}