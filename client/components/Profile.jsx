import React, { Component } from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'
import { logoutUser } from '../actions/auth'
import { logOutProfile } from '../actions/profile'

export class Profile extends Component {
  logout = event => {
    event.preventDefault()
    this.props.dispatch(logOutProfile())
    this.props.dispatch(logoutUser())
  }
  
  render() {
    const yourProfile = this.props.profile.profile
    return (
      <div>
        <h1>Your profile</h1>
        <Link  to="/" onClick={this.logout}>Logout</Link>
        {(yourProfile) ? 
        <div>
          <img src={yourProfile.image_url} width='20%' alt={`${yourProfile.first_name} profile image`}/>
          <ul>
            <li>Name: {yourProfile.first_name} {yourProfile.last_name}</li>
            <li>Date of birth: {yourProfile.birthday}</li>
            <li>Phone: {yourProfile.phone}</li>
            <li>Address: {yourProfile.address}, {yourProfile.city}</li>
            <li>Zip Code: {yourProfile.zipCode}</li>
          </ul>
        </div> :
        <div>
          <h1>loading</h1>
        </div>
        }
      </div>
    )
  }
}

function mapStateToProps(globalState){
  console.log(globalState)
  return{
    auth: globalState.auth,
    profile: globalState.profile
  }
}

export default connect(mapStateToProps)(Profile)
