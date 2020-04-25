import React from 'react'

function Slide(props) {
  return (
    <li data-transition={props.item.transition} 
        data-slotamount="default" 
        data-easein="Power4.easeInOut" 
        data-easeout="Power4.easeInOut" 
        data-masterspeed="2000">
        {/* <!-- MAIN IMAGE --> */}
        <img src={props.item.image} alt="Slide Background Image"  width="1920" height="1280"/>

        {/* <!-- LAYER NR. 1 --> */}
        <div className="tp-caption" 
          data-x="center" data-hoffset="0" 
          data-y="center" data-voffset="-65" 
          data-whitespace="nowrap"
          data-width="none"
          data-height="200px"
          data-transform_idle="o:1;"
          data-transform_in={props.item.layer1.dataTransformIn} 
          data-transform_out={props.item.dataTransformOut} 
          data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" 
          data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" 
          data-start="500" 
          data-splitin="none" 
          data-splitout="none" 
          data-responsive_offset="on"
          data-fontsize="['16','16','15','15']"
          data-lineheight="['70','45','25','25']"
          data-fontweight="['700','500','600','300']"
          data-color="#fff" style={{fontFamily: 'Open Sans', textTransform: 'capitalize'}}>
          <img src={props.item.logo} alt="thumb logo"/>
        </div>
        
        {/* <!-- LAYER NR. 2 --> */}
        <div className="tp-caption" 
          data-x="center" data-hoffset="0" 
          data-y="center" data-voffset="-20" 
          data-whitespace="nowrap"
          data-width="none"
          data-height="none"
          data-transform_idle="o:1;"
          data-transform_in={props.item.layer2.dataTransformIn}
          data-transform_out={props.item.dataTransformOut} 
          data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" 
          data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" 
          data-start="500" 
          data-splitin="none" 
          data-splitout="none" 
          data-responsive_offset="on"
          data-fontsize="['16','16','15','15']"
          data-lineheight="['70','45','25','25']"
          data-fontweight="['700','500','600','300']"
          data-color="#fff" style={{fontFamily: 'Open Sans', whiteSpace: 'nowrap', textTransform: 'uppercase'}}>
          {props.item.text}
        </div>
        
        {/* <!-- LAYER NR. 3 --> */}
        <div className="tp-caption" 
          data-x="center" data-hoffset="0" 
          data-y="center" data-voffset="30" 
          data-whitespace="nowrap"
          data-width="none"
          data-height="none"
          data-transform_idle="o:1;"
          data-transform_in={props.item.layer3.dataTransformIn}
          data-transform_out={props.item.dataTransformOut} 
          data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" 
          data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" 
          data-start="750" 
          data-splitin="none" 
          data-splitout="none" 
          data-responsive_offset="on"
          data-fontsize="['61','17','15','15']"
          data-lineheight="['40','45','25','25']"
          data-fontweight="['700','500','600','300']">
          <h1 style={{color: '#fff', fontSize: '61px', fontFamily: 'Poppins', textTransform: 'capitalize'}}>{props.item.vision}</h1>
        </div>
        
        {/* <!-- LAYER NR. 4 --> */}
        <div className="tp-caption" 
          data-x="center" data-hoffset="0" 
          data-y="center" data-voffset="80" 
          data-width="none"
          data-height="none"
          data-transform_idle="o:1;"
          data-transform_in={props.item.layer4.dataTransformIn}
          data-transform_out={props.item.dataTransformOut}
          data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" 
          data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" 
          data-start="1000" 
          data-splitin="none" 
          data-splitout="none" 
          data-responsive_offset="on"
          data-fontsize="['15','15','15','15']"
          data-lineheight="['24','24,'25','25']"
          data-fontweight="['700','500','500','500']"
          data-textalign="['center','center','center','center']"
          data-color="#fff" style={{fontFamily: 'Open Sans', textAlign: 'center', textTransform: 'capitalize'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam,<br/>
          adipiscing condimentum tristique vel, eleifend sed turpis.
        </div>
      </li>
  )
}

export default Slide
