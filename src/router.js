import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
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
import NoMatch from 'pages/noMatch'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Route path="/login" component={Login}/>
          <Route path="/admin" render={() =>
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Bottons}/>
                <Route path="/admin/ui/modals" component={Modals}/>
                <Route path="/admin/ui/loadings" component={Loadings}/>
                <Route path="/admin/ui/notification" component={Notice}/>
                <Route path="/admin/ui/messages" component={Messages}/>
                <Route path="/admin/ui/tabs" component={Tab}/>
                <Route path="/admin/ui/gallery" component={Gallery}/>
                <Route path="/admin/ui/carousel" component={Carousel}/>
                <Route path="/admin/form/login" component={FormLogin}/>
                <Route path="/admin/form/reg" component={FormRegister}/>
                <Route component={NoMatch}/>
              </Switch>
            </Admin>
          }/>
        </App>
      </BrowserRouter>
    )
  }
}