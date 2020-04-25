import React, { Component } from 'react'
import { slide } from '../../data/slide';

import Slide from './Slide'
class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {
      slide: slide.slide
    }
  }
  render() {
    return (
      <section id='hero' className='hero'>
        <div className='rev_slider_wrapper'>
          <div id="home8-slider" className="rev_slider"  data-version="5.0">
            <ul>
              {this.state.slide.map((item, index)=>{
                return(
                  <Slide key={index} item={item}></Slide>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Landing
