import React, { Component } from 'react'
import { about } from '../../data/about';

class AboutUs extends Component {
  render() {
    return (
      <>
      <section id='shortcode9' className='shortcode-9'>
        <div className='color-overlay'>
          <div className='video-container'>
            <video src='/assets/cleanbeach.mp4' autoPlay loop></video>
          </div>
        </div>
        <div className='container'>
          <div className='row heading-1 mb-60 clearfix'>
            <div className='col-xs-12 col-xs-offset-1  col-sm-12  col-md-3 col-md-offset-1'>
              <div className="heading mb-0">
                <p>Who We Are</p>
                <h2>About Us</h2>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7">
              <p style={{color: 'aliceblue', fontSize: '1.25rem'}} className="mb-0">Meet Our Awesome Clients ! Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
          </div>
          <div className='row'>
            {about.map((item, index)=>{
              return(
                <div key={index} className="col-xs-12 col-sm-4 col-md-4">
                  <div className='num'>{item.id}</div>
                    <h3>{item.title}</h3>
                    <img src={item.image} alt="features"/>
                  <p className='mb-0'>{item.message}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default AboutUs
