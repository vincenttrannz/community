import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { loginUser, loginError } from '../actions/auth'

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  updateDetails = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submit = event => {
    event.preventDefault()
    let { username, password } = this.state
    console.log(this.state)
    const confirmSuccess = () => { this.props.history.push('/profile') }
    this.props.dispatch(loginUser({ username, password }, confirmSuccess))
  }

  render() {
    const {auth} = this.props
    return (
      <section id="signIn" className="background-login page-sign bg-overlay bg-overlay-dark fullscreen pt-150">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 sign-icon">
              <i style={{color: 'rgb(57, 142, 236)'}} className="fas fa-user-lock"></i>             
              <h5>Sign In</h5>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-8 sign-form">
              {auth.errorMessage && <span className="">{auth.errorMessage}</span>}
              <form className="mb-0" onSubmit={this.submit}>
                <div className="form-group">
                  <label htmlFor="username">User Name :</label>
                  <input type="text" name="username" className="form-control" id="username" value={this.state.username} onChange={this.updateDetails} required/>
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password :</label>
                  <input type="password" name="password" className="form-control" id="pwd" value={this.state.password} onChange={this.updateDetails} required/>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox"/>
                    Remember me
                  </label>
                </div>
                <button type="submit" value="Login" className="btn btn-primary btn-block">login</button>
              </form>
              <div className="form-links">
                <Link to="/register">Create New Account</Link> &nbsp;
                /
                &nbsp; <Link to="/">Forget your password</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  console.log(auth)
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)
