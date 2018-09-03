import React from 'react'
import {Card, Table, Modal, Button, message, Badge} from 'antd'
import Axios from 'api/axios'
import Utils from 'utils/utils';

export default class HighTable extends React.Component {
  state = {
    dataSource2: []
  }
  params = {
    page:1
  }
  componentWillMount(){
    const data = [
      {
        id:'0',
        userName:'Jack',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'2000-01-01',
        address:'北京市海淀区奥林匹克公园',
        time:'09:00'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
      {
        id: '2',
        userName: 'Lily',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
    ]
    data.map((item,index) =>
      item.key = index
    )
    this.setState({
      dataSource: data
    })
    this.request()
  }
  request = () => {
    Axios.ajax({
      url:'/table/high',
      data:{
        params:{
          page:this.params.page
        },
        showLoading: true
      }
    }).then((res) => {
      if (res.code === 0) {
        res.result.list.map((item, index) =>
          item.key = index
        )
        this.setState({
          dataSource2: res.result.list,
          selectedRowKeys:[],
          selectedRows:null,
          pagination: Utils.pagination(res,(current)=>{
            this.params.page = current
            this.requset()
          })
        })
      }
    })
  } 
  handleChange = (pagination, filters, sorter)=>{
    this.setState({
        sortOrder:sorter.order
    })
  }
  // 多选执行删除动作
  handleDelete = ((item) => {
    Modal.confirm({
      title:'确认',
      content:'您确认要删除此条数据吗？',
      onOk:() => {
        message.success('删除成功');
        this.request();
      }
    })
  })
  render() {
    const selectedRowKeys = this.state.selectedRowKeys;
    const columns = [
      {
        title:'id',
        key:'id',
        width: 80,
        dataIndex:'id'
      },
      {
        title: '用户名',
        width: 80,
        key: 'userName',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        width: 80,
        key: 'sex',
        dataIndex: 'sex',
        render(sex){
          return sex === 1 ?'男':'女'
        }
      },
      {
        title: '状态',
        width: 80,
        key: 'state',
        dataIndex: 'state',
        render(state){
            let config  = {
                '1':'咸鱼一条',
                '2':'风华浪子',
                '3':'北大才子',
                '4':'百度FE',
                '5':'创业者'
            }
            return config[state];
        }
      },
      {
        title: '爱好',
        key: 'interest',
        width: 80,
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc];
        }
      },
      {
        title: '生日',
        key: 'birthday',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        width: 240,
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        width: 80,
        dataIndex: 'time'
      }
    ]
    const columns2 = [
      {
        title:'id',
        key:'id',
        width: 80,
        fixed: 'left',
        dataIndex:'id'
      },
      {
        title: '用户名',
        width: 80,
        key: 'userName',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        width: 80,
        key: 'sex',
        dataIndex: 'sex',
        render(sex){
          return sex === 1 ?'男':'女'
        }
      },
      {
        title: '状态',
        width: 80,
        key: 'state',
        dataIndex: 'state',
        render(state){
            let config  = {
                '1':'咸鱼一条',
                '2':'风华浪子',
                '3':'北大才子',
                '4':'百度FE',
                '5':'创业者'
            }
            return config[state];
        }
      },
      {
        title: '爱好',
        key: 'interest',
        width: 80,
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc];
        }
      },
      {
        title: '生日',
        key: 'birthday',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday1',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday2',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday3',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday4',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday5',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday6',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday7',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday8',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday9',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday10',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday11',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        key: 'birthday12',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        width: 240,
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        width: 80,
        fixed: 'right',
        dataIndex: 'time'
      }
    ]
    const columns3 = [
      {
        title:'id',
        key:'id',
        dataIndex:'id'
      },
      {
        title: '用户名',
        key: 'userName',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',
        render(sex){
          return sex === 1 ?'男':'女'
        }
      },
      {
        title: '年龄',
        key: 'age',
        dataIndex: 'age',
        sorter:(a,b) => {
          return a.age - b.age
        },
        sortOrder:this.state.sortOrder
      },
      {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render(state){
            let config  = {
                '1':'咸鱼一条',
                '2':'风华浪子',
                '3':'北大才子',
                '4':'百度FE',
                '5':'创业者'
            }
            return config[state];
        }
      },
      {
        title: '爱好',
        key: 'interest',
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': '游泳',
            '2': '打篮球',
            '3': '踢足球',
            '4': '跑步',
            '5': '爬山',
            '6': '骑行',
            '7': '桌球',
            '8': '麦霸'
          }
          return config[abc];
        }
      },
      {
        title: '生日',
        key: 'birthday',
        width: 80,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        width: 240,
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        width: 80,
        dataIndex: 'time'
      }
    ]
    const columns4 = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age'
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state) {
          let config = {
            '1': '咸鱼一条',
            '2': '风华浪子',
            '3': '北大才子',
            '4': '百度FE',
            '5': '创业者'
          }
          return config[state];
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(abc) {
          let config = {
            '1': <Badge status="success" text="成功"/>,
            '2': <Badge status="error" text="报错" />,
            '3': <Badge status="default" text="正常" />,
            '4': <Badge status="processing" text="进行中" />,
            '5': <Badge status="warning" text="警告" />
          }
          return config[abc];
        }
      },
      {
          title: '生日',
          dataIndex: 'birthday'
      },
      {
          title: '地址',
          dataIndex: 'address'
      },
      {
          title: '操作',
          render:(text,item)=>{
              return <Button size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>
          }
      }
    ]
    const rowCheckSelection = {
      type:'checkbox',
      selectedRowKeys
    }
  
    return (
      <div className="content-wrapper">
        <Card title="头部固定">
          <Table
             bordered
             columns={columns}
             dataSource={this.state.dataSource}
             pagination={false}
             scroll={{y:100}}
          />
        </Card>
        <Card title="左侧固定">
          <Table
             bordered
             columns={columns2}
             dataSource={this.state.dataSource2}
             pagination={false}
             scroll={{x:1760}}
             rowSelection={rowCheckSelection}
          />
        </Card>
        <Card title="表格排序">
          <Table
             bordered
             columns={columns3}
             dataSource={this.state.dataSource2}
             pagination={false}
             onChange={this.handleChange}
          />
        </Card>
        <Card title="操作按钮" style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns4}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
}