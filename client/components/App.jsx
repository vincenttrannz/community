import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Landing from './Landing'
import AboutUs from './AboutUs'
import OurTeam from './OurTeam'
import Navi from './Navi'

const App = () => {
  return (
    <Router>
      <Route exact path='/'>
      <div id="wrapper" className="wrapper clearfix">
        <Navi/>
        <Landing/>
        <AboutUs/>
        <OurTeam/>
      </div>
      </Route>
    </Router>
  )
}

export default App
