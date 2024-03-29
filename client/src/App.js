import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/index'
import LoginPage from './components/views/LoginPage/index'
import RegisterPage from './components/views/RegisterPage/index'
import Auth from './hoc/auth'


function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, null, true)}/>
        <Route exact path="/login" component={Auth(LoginPage, false)}/>
        <Route exact path="/register" component={Auth(RegisterPage, false)}/>
      </Switch>
    </div>
  </Router>
  )
}

export default App
