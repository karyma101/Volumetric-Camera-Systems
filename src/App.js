import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/home'
import Contact from './pages/contact'
import Team from './pages/team'

import './App.css'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/team">
          <Team />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  )
}

export default App