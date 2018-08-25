import React from 'react'
import {Icon} from 'antd'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Icon
          className="trigger"
          type="menu-fold"
          onClick={this.toggle}
        />
      </div>
    )
  }
}