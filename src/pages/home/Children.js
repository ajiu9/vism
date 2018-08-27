import React from 'C:/Users/Administrator/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'
import './content.less'

export default class Children extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
  }
  componentWillMount() {
    console.log('will mount')
  }
  componentDidMount() {
    console.log('will didmount')
  }
  componentWillReceiveProps(props) {
    console.log(`will props ${this.state}`)
  }
  shouldComponentUpdate() {
    console.log('should update')
    return true
  }
  componentWillUpdate() {
    console.log('will update')
  }
  componentDidUpdate() {
    console.log('did update')
  }
  render() {
    return (
      <div>
        <p className="content">子组件{this.props.name}</p>
      </div>
    )
  }
}