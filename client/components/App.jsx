import React, {Component} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Landing from './Landing'
import AboutUs from './AboutUs'
import OurTeam from './OurTeam'
import Navi from './Navi'
import Login from './Login'
import Register from './Register'

import CreateProfile from './CreateProfile'
import Profile from './Profile'
import Hello from './Hello'

import { checkAuth } from '../actions/auth'

class App extends Component{
  componentDidMount() {
    const confirmSuccess = () => { }
    this.props.dispatch(checkAuth(confirmSuccess))
  }

  render(){
    const {auth} = this.props
    return (
      <div id="wrapper" className="wrapper clearfix">
      <Router>
        {!auth.isAuthenticated &&
        <>
          <Route exact path='/'>
            <Navi/>
            <Landing/>
            <AboutUs/>
            <OurTeam/>
          </Route>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </>
        }

        {auth.isAuthenticated && 
        <>
          <Route path="/create-profile" component={CreateProfile}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/hello" component={Hello}/>
        </>
        }
      </Router>
      </div>
    )
  }
}

function mapStateToProps({auth}){
  console.log(auth)
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
