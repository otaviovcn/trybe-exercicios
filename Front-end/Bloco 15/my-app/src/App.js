import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Display from './pages/display/Display'
import Form from './pages/form/Form'


export default class App extends Component {
  state = {
    registered: false,
  }
// 
  render() {
    const { registered } = this.state;

    return (
      <div>
        <Switch>
          <Route exact path="/">
            { registered ? <Redirect to="/display" /> : <Form /> }
          </Route>
          <Route path="/display" component={ Display } />
        </Switch>
      </div>
    )
  }
}
