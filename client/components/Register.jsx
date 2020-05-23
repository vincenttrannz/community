import React, { Component } from 'react'
import {connect} from 'react-redux'
import { loginError, registerUserRequest } from '../actions/auth'


export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  }

  componentDidMount() {
    this.props.dispatch(loginError(''))
  }

  updateDetails = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit = e => {
    e.preventDefault()
    e.target.reset()
    let { username, email, password, confirm_password,} = this.state

    if (confirm_password != password) {
      return this.props.dispatch(loginError("Passwords don't match, please try again"))
    }

    const confirmSuccess = () => { this.props.history.push('/create-profile') }

    this.props.dispatch(registerUserRequest({ username, email, password,}, confirmSuccess))
  }

  render() {
    const { auth } = this.props
    return (
      <section id="signIn" className="background-register page-sign bg-overlay bg-overlay-dark pt-50">
        <div className="container">
          <div className="row bg-gray">
            <div className="col-md-4 sign-icon">
              <i style={{color: 'rgb(57, 142, 236)'}} className="fas fa-user-plus"></i>
              <h5>Sign Up</h5>
              {auth.errorMessage && <div><strong style={{color: 'brown'}}>{auth.errorMessage}</strong></div>}
            </div>
            <div className="col-md-8 sign-form">
              <form onSubmit={this.submit}>
                <div className="form-group">
                  <label htmlFor="username">User Name :</label>
						      <input type="text" name='username' className="form-control" id="username" required onChange={this.updateDetails} value={this.state.username} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email :</label>
                  <input type="email" name='email' className="form-control" id="email" required onChange={this.updateDetails} value={this.state.email} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password :</label>
                  <input type="password" name='password' className="form-control" id="password" required onChange={this.updateDetails} value={this.state.password} />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm_password">Confirm Password :</label>
                  <input type="password" name='confirm_password' className="form-control" id="confirm_password" required onChange={this.updateDetails} value={this.state.confirm_password} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">signup</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps({auth}){
  return{
    auth
  }
}

export default connect(mapStateToProps)(Register)
