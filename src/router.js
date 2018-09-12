import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Home from 'pages/home'
import Login from 'pages/login/index'
import Bottons from 'pages/ui/buttons'
import Modals from 'pages/ui/modals'
import Loadings from 'pages/ui/loadings'
import Notice from 'pages/ui/notice'
import Messages from 'pages/ui/messages'
import Tab from 'pages/ui/tabs'
import Gallery from 'pages/ui/gallery'
import Carousel from 'pages/ui/carousel'
import FormLogin from 'pages/form/login'
import FormRegister from 'pages/form/register'
import BasiceTable from 'pages/table/basicTable'
import HighTable from 'pages/table/highTable'
import City from 'pages/city'
import Order from 'pages/order'
import OrderDetail from 'pages/order/detail'
import User from 'pages/user'
import BikeMap from 'pages/map/bikeMap'
import Bar from 'pages/echarts/bar'
import Pie from 'pages/echarts/pie'
import Line from 'pages/echarts/line'
import Rich from 'pages/rich'
import Permission from 'pages/permission'
import NoMatch from 'pages/noMatch'

import Common from './common'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/common" render={() =>
              <Common>
                <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
              </Common>
            }/>
            <Route path="/" render={() =>
              <Admin>
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/ui/buttons" component={Bottons}/>
                  <Route path="/ui/modals" component={Modals}/>
                  <Route path="/ui/loadings" component={Loadings}/>
                  <Route path="/ui/notification" component={Notice}/>
                  <Route path="/ui/messages" component={Messages}/>
                  <Route path="/ui/tabs" component={Tab}/>
                  <Route path="/ui/gallery" component={Gallery}/>
                  <Route path="/ui/carousel" component={Carousel}/>
                  <Route path="/form/login" component={FormLogin}/>
                  <Route path="/form/reg" component={FormRegister}/>
                  <Route path="/table/basic" component={BasiceTable}/>
                  <Route path="/table/high" component={HighTable}/>
                  <Route path="/city" component={City}/>
                  <Route path="/order" component={Order}/>
                  <Route path="/user" component={User}/>
                  <Route path="/bikeMap" component={BikeMap}/>
                  <Route path="/charts/bar" component={Bar}/>
                  <Route path="/charts/pie" component={Pie}/>
                  <Route path="/charts/line" component={Line}/>
                  <Route path="/rich" component={Rich}/>
                  <Route path="/permission" component={Permission}/>
                  <Redirect to="/home"/>
                  <Route component={NoMatch}/>
                </Switch>
              </Admin>
            }/>
          </Switch>
        </App>
      </BrowserRouter>
    )
  }
}