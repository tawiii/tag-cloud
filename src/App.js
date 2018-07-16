import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import TagPage from './components/TagPage'


class App extends Component {

  render() {
    return (
      <Switch>     
          <Route path='/home/:id' component={TagPage}/> 
          <Route path='/home' component={HomePage}/>     
      </Switch>
    )
  }
}

export default App

