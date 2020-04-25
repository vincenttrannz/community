import React, { Component } from 'react'
import {members} from '../../data/member'

class OurTeam extends Component {
  render() {
    return (
      <section id='team' className='team team-1 pb-lg bg-gray'>
        <div className='container'>
          <div className='row heading-1 mb-60 clearfix'>
            <div className="col-xs-12 col-xs-offset-1  col-sm-12  col-md-3 col-md-offset-1">
              <div className="heading mb-0">
                <p>Who We Are</p>
                <h2>The Team</h2>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12  col-md-7">
              <p class="mb-0">Meet Our Awesome Team ! Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
          </div>
          <div className='row'>
          {members.map((member, index)=>{
            return(
              <div key={index} className="col-xs-12 col-sm-6 col-md-3 member">
                <div className="member-img">
                  <img src={member.image} alt={member.name}/>
                  <div className="member-bg"></div>
                  <div className="member-overlay">
                    <h6>{member.role}</h6>
                    <h5>{member.name}</h5>
                  </div>
                  <div className="member-hover">
                    <h6>{member.role}</h6>
                    <h5>{member.name}</h5>
                    <p>{member.message}</p>
                    <div className="member-social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-google-plus"></i></a>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </section>
    )
  }
}

export default OurTeam
