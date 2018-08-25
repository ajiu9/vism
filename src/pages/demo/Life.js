import React from 'react'
import Children from './Children'
import {Button, Input } from 'antd'

export default class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 5
    }
  }
  handleAdd = (() => {
    this.setState({
      count: this.state.count + 1
    })
  })
  render() {
    return (
      <div>
        <p>life cycle</p>
        <button onClick={this.handleAdd}>click</button>
        <p>{this.state.count}</p>
        <Children name={this.state.count}></Children>
        <Input placeholder="Basic usage"></Input>
        <Button type="primary">Button</Button>
        
      </div>
    )
  }
}