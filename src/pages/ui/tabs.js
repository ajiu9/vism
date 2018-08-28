import React from 'react'
import {Card, Icon, Tabs, message} from 'antd'
import './index.less'

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  callback = (key) => {
    message.info(`您好，您选择了标签页${key}`)
  }
  
  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

    
  onEdit = (targetKey, action) => {
    console.log(action)
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
  render() {
    const TabPane = Tabs.TabPane

    return (
      <div className="content-wrapper">
        <Card title="tab页签">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">学如逆水行舟</TabPane>
            <TabPane tab="Tab 2" key="2" disabled>学如 逆水 行舟</TabPane>
            <TabPane tab="Tab 3" key="3">学 如 逆 水 行 舟</TabPane>
          </Tabs>
        </Card>
        <Card title="tab图标页签">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">学如逆水行舟</TabPane>
            <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">学如 逆水 行舟</TabPane>
            <TabPane tab={<span><Icon type="windows" />Tab 3</span>} key="3">学 如 逆 水 行 舟</TabPane>
          </Tabs>
        </Card>
        <Card title="tab自定义新增页签">
        <Tabs
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
        </Tabs>
        </Card>
      </div>
    )
  }
}