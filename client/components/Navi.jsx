import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navi extends Component {
  render() {
    return (
        <header id="navbar-spy" className="header header-1 transparent-header">
          <nav id="primary-menu" className="animated slideInDown delay-3s slow navbar navbar-fixed-top affix">
            <div className="container">
              <div className="navbar-header">
                <Link className="logo" to="/">
                  <span className='logo-text'>
                    <img src="assets/images/logo/green.png" alt="Green Logo"/>
                    <h3>&nbsp; GO&nbsp;</h3>
                    <h3>GREEN</h3>
                  </span>
                </Link>
              </div>
              <div className="collapse navbar-collapse pull-right" id="navbar-collapse-1">
                <ul className="nav navbar-nav navbar-left">
                  <li>
                    <a href="#" className="link-hover" data-hover="home">Home</a>
                  </li>
                  <li>
                    <a href="#" className="link-hover" data-hover="about">About</a>
                  </li>
                  <li>
                    <a href="#" className="link-hover" data-hover="team">Team</a>
                  </li>
                  <li>
                    <a href="#" className="link-hover" data-hover="contact">Contact</a>
                  </li>
                  <li className="has-dropdown">
                    <a href="#" data-toggle="dropdown" className="dropdown-toggle link-hover" data-hover="Join">Join</a>
                    <ul className='dropdown-menu'>
                      <li><a href=''>Login</a></li>
                      <li><a href="">Signup</a></li>
                      <li><a href="">Password Reset</a></li>
                    </ul>
                  </li>
                </ul>
                <div className="module module-side-nav pull-left">
                  <div className="module-icon side-nav-icon">
                    <i className="fa fa-bars"></i>
                    <span className="title">Side Navigation</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header> 
    )
  }
}

export default Navi
