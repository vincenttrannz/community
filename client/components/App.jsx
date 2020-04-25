import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Landing from './Landing'
import AboutUs from './AboutUs'
import OurTeam from './OurTeam'

const App = () => {
  return (
    <Router>
      <Route exact path='/'>
        <Landing/>
        <AboutUs/>
        <OurTeam/>
      </Route>
    </Router>
  )
}

export default App
