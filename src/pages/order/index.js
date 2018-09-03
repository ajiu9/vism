import React from 'react'
import {Card, Button, Table, Form, Select, Modal, message} from 'antd'
import axios from 'api/axios'
import Utils from 'utils/utils'

const FormItem = Form.Item
const Option = Select.Option

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
  requestList =() => {
    let _this = this;
      axios.ajax({
          url:'/order/list',
          data:{
              params: this.params
          }
      }).then((res)=>{
        let list = res.result.item_list.map((item, index) => {
            item.key = index
            return item
        });
        this.setState({
          list,
          pagination: Utils.pagination(res, (current) => {
            _this.params.page = current
            _this.requestList()
          })
        })
    })
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
          <FilterForm/>
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

class FilterForm extends React.Component{

  render(){
    const { getFieldDecorator } = this.props.form;
      return (
       <Form layout="inline">
          <FormItem label="城市">
            {
              getFieldDecorator('city_id')(
                <Select
                  style={{width:100}}
                  placeholder="全部"
                >
                  <Option value="">全部</Option>
                  <Option value="1">北京市</Option>
                  <Option value="2">天津市</Option>
                  <Option value="3">深圳市</Option>
                </Select>
              )
            }
          </FormItem>
        <FormItem label="用车模式">
          {
            getFieldDecorator('mode')(
              <Select
                style={{ width: 120 }}
                placeholder="全部"
              >
                <Option value="">全部</Option>
                <Option value="1">指定停车点模式</Option>
                <Option value="2">禁停区模式</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="营运模式">
          {
            getFieldDecorator('op_mode')(
              <Select
                style={{ width: 80 }}
                placeholder="全部"
              >
                <Option value="">全部</Option>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )
          }
        </FormItem>
          <FormItem label="加盟商授权状态">
            {
              getFieldDecorator('auth_status')(
                <Select
                  style={{ width: 100 }}
                  placeholder="全部"
                >
                  <Option value="">全部</Option>
                  <Option value="1">已授权</Option>
                  <Option value="2">未授权</Option>
                </Select>
              )
            }
        </FormItem>
        <FormItem>
          <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    )
  }
}

FilterForm = Form.create({})(FilterForm);