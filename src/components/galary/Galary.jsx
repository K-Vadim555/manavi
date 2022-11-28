import { Typography } from '@mui/material';
import React from 'react'
import './galary.scss'
import line from '../../img/Line 2.png'
import ros1 from './img/rosmarin-kotanyi-inhalt 2.png'
import ros2 from './img/rosmarin-kotanyi-inhalt 3.png'

import a11 from './img/a11.png'
import a12 from './img/12.png'
import a13 from './img/13.png'
import Slider from "react-slick";
import ine from '../../img/Line 2.png'
import prev from './img/Arrow 2.png'
import next from './img/Arrow 1.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      >
        <img src={next}></img>
      </div>
    );
  }
  function TrendingFlatIconNext(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      >
        <img className='prav' style={{
            margin:"0 10vw",
            width:'8vw'
        }} src={next}></img>
      </div>
    );
  }function TrendingFlatIconPrev(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      >
        <img className='lev' style={{
            
            width:'8vw'
        }} src={prev}></img>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",
       
       }}
        onClick={onClick}
      >
       <img src={prev}></img>
      </div>
    );
  }
  


export const Galary = () => {
    const settings = {
        dots: false,
        speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  
    autoplaySpeed: 3000,
        cssEase: "linear",
      
        nextArrow: <TrendingFlatIconNext/>,
          prevArrow: <TrendingFlatIconPrev />,
      
          responsive: [
            {
              breakpoint: 480,
              settings:{
                slidesToShow: 1,
              }
            },
           
          ]
        
      };
  return (
    <div id='galary' className='galary'>
       <Typography textAlign='start' className='contact-title ' color='secondary'>Галерея</Typography>
       <img className='a2' src={ine} alt="" />
        <Typography className='r' textAlign='start' sx={{
          marginLeft:'7.8vw',
          color: '#BFBFBF',
          fontSize: '1vw',
          width:'25vw',
          letterSpacing: '0.07em',
        }}
        >დაჯავშნე მაგიდა</Typography>
        
        <img className='ros1' src={ros1} alt="" />
        <img className='ros2' src={ros2} alt="" />
        <Slider className='galary-slider' {...settings}>
      <div className='img1'>
        <img  src={a11} alt="" />
    
      </div>
      <div className='img1'>
        <img src={a12} alt="" />
    
      </div>
      <div className='img1'>
        <img src={a13} alt="" />
    
      </div>
      <div className='img1'>
        <img src={a11} alt="" />
    
      </div>
      
      
    </Slider>
    </div>
  )
}
export default Galary;
