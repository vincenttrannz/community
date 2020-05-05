import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { logoutUser } from '../actions/auth'


export class Hello extends Component {
  logout = event => {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    return (
      <div>
        <h1>HELLO TEST</h1>
        <Link to="/" onClick={this.logout}>LOGOUT</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
