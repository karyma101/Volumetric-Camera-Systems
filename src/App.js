import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/home'

import './App.css'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Route to="/">
        <Home />
      </Route>
    </Fragment>
  )
}

export default App