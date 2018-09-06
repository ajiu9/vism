import React from 'react'
import {Card, Button, Table, Modal} from 'antd'
import axios from 'api/axios'
import BaseForm from 'components/BaseForm'

export default class Order extends React.Component {
  state = {
    list: []
  }
  params = {
    page: 1
 }
  componentWillMount() {
    this.requestList()
  }
  formList = [
    {
      type:'SELECT',
      label:'城市',
      field:'city',
      placeholder:'全部',
      initialValue:'1',
      width:80,
      list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '天津' }, { id: '3', name: '上海' }]
    },
    {
      type: '时间查询',
      field:'time'
    },
    {
      type: 'SELECT',
      label: '订单状态',
      field:'order_status',
      placeholder: '全部',
      initialValue: '0',
      width: 80,
      list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束行程' }]
    }
  ]
  openOrderDetail = () => {
    let item = this.state.selectedItem;
    if (!item) {
      Modal.info({
        title: '信息',
        content: '请先选择一条订单'
      })
      return
    }
    window.open(`/common/order/detail/${item.id}`,'_blank')
  }
  onRowClick = (record, index) => {
    let selectKey = [index]
    this.setState({
        selectedRowKeys: selectKey,
        selectedItem: record
    })
  }
  handleFilter = (params) => {
    this.params = params
    this.requestList()
  }
  requestList =() => {
    axios.requestList(this, '/order/list', this.params)
  }
  render() {
    const columns = [
      {
        title:'订单编号',
        dataIndex:'order_sn'
      },
      {
        title: '车辆编号',
        dataIndex: 'bike_sn'
      },
      {
        title: '用户名',
        dataIndex: 'user_name'
      },
      {
        title: '手机号',
        dataIndex: 'mobile'
      },
      {
        title: '里程',
        dataIndex: 'distance',
        render(distance){
            return distance/1000 + 'Km';
        }
      },
      {
        title: '行驶时长',
        dataIndex: 'total_time'
      },
      {
        title: '状态',
        dataIndex: 'status'
      },
      {
        title: '开始时间',
        dataIndex: 'start_time'
      },
      {
        title: '结束时间',
        dataIndex: 'end_time'
      },
      {
        title: '订单金额',
        dataIndex: 'total_fee'
      },
      {
        title: '实付金额',
        dataIndex: 'user_pay'
      }
    ]
    const selectedRowKeys = this.state.selectedRowKeys
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    return (
      <div style={{margin: 20}}>
        <Card style={{marginBottom: 20}}>
        <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
        </Card>
        <Card>
          <Button type="primary" onClick={this.openOrderDetail} style={{marginRight: 10}}>订单详情</Button>
          <Button type="primary">结束订单</Button>
        </Card>
        <div className="content-wrap">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                  onClick: () => {
                    this.onRowClick(record, index);
                  }
              };
          }}
          />
        </div>
      </div>
    )
  }
}