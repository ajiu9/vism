import React from 'react'
import {Row, Col} from 'antd'
import './index.less'
import Util from 'utils/utils'
import Axios from 'api/axios'

export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      userName: '阿九人儿'
    })
    setInterval(() => {
      let newDate = + new Date()
      let systemTime = Util.formatDate(newDate)
      this.setState({
        systemTime
      })
    }, 1000)
    this.getWeatherAPIData();
  }
  getWeatherAPIData(){
    let city = '新化';
    Axios.jsonp({
        url:`http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    }).then((res)=>{
        if(res.status === 'success'){
          let data = res.results[0].weather_data[0];
          this.setState({
            dayPictureUrl:data.dayPictureUrl,
            weather:data.weather
        })

      }
    })
  }
  render() {
    const { menuName, menuType } = this.props;
    return (
      <div className="header">
        <Row className="header-top">
         {
          menuType?
            <Col span="6" className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <span>视与界</span>
            </Col>:''
          }
          <Col span={menuType ? 18 :24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="">退出</a>
          </Col>
        </Row>
        {
          menuType ? '' :
            <Row className="breadrumb">
              <Col span="4" className="breadrumb-title">首页</Col>
              <Col span="20" className="weather">
                <span className="date">{this.state.systemTime}</span>
                <img className="image" src={this.state.dayPictureUrl} alt=""/>
                <span className="weather-detail">{this.state.weather}</span>
              </Col>
            </Row>
        }
      </div>
    )
  }
}