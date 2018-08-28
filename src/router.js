import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from 'pages/login/index'
import Bottons from 'pages/ui/buttons'
import NoMatch from 'pages/noMatch'

export default class IRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Route path="/login" component={Login}/>
          <Route path="/admin" render={() =>
            <Admin>
              <Route path="/admin/ui/buttons" component={Bottons}/>
              <Route component={NoMatch}/>
            </Admin>
          }/>
        </App>
      </BrowserRouter>
    )
  }
}