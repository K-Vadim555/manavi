import { Grid, Typography } from '@mui/material';
import React from 'react'
import './About-us.scss'
import bc from './about-img/aboutus-bg.png'
import Slider from "react-slick";
import pizza from '../../img/sl.png'
import piza from '../../img/sweets 1.png'
import prev from '../../img/Vector 1.png'
import next from '../../img/Vector 2.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import line from '../../img/Line 2.png'
import a11 from './about-img/a11.png'
import a12 from './about-img/12.png'
import a13 from './about-img/13.png'

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

export const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    
  
    
  };

  return (
    <div id='aboutus' className='About'>
      
      <div  className=" img about-wrapper">
      <Typography textAlign='start' className='text ' color='secondary'>О нас</Typography>


      
      <img className='a1' src={line} alt="" />
        <Typography className='r' textAlign='start' sx={{
          
          color: '#BFBFBF',
          fontSize: '1vw',
          width:'25vw',
          letterSpacing: '0.07em',
        }}
        >დაჯავშნე მაგიდა</Typography>


      <Grid className='grid-cont' container>
  <Grid  item xs={6}>
    <div  className='sliderrr'>
   
    <Slider {...settings}>
      <div>
        <img src={pizza} alt="" />
    
      </div>
      <div>
        <img src={a11} alt="" />
    
      </div>
      <div>
        <img src={a12} alt="" />
    
      </div>
      <div>
        <img src={a13} alt="" />
    
      </div>
      
      
    </Slider>
  </div>
  </Grid>
  <Grid item xs={6}>
  <Typography textAlign='start' className='textt ' color='secondary'>«Manavi» — это уникальный ресторан, сочетающий в себе современную культуру экодизайна, экзотическую кухню юго-восточных стран Азии и современной Грузии. Меню ресторана выдержано в концепции «Суши & Бургер» и настолько разнообразно, что сможет удивить гастрономическими изысками даже самого утонченного гурмана. Лапша и рис , суши, гунканы, сашими, роллы, бургеры, хоспер-меню это лишь общий перечень блюд из меню ресторана.<br></br><br></br>

«Manavi» познакомит вас с новыми экзотическими ароматами, новыми вкусовыми оттенками традиционных блюд и яркими европейскими вкусами бургеров, которые взорвали своей популярность весь мир. Все мясные и рыбные блюда готовятся в специальном хоспере на древесном угле, который придает неповторимый, особый вкус блюда из печи, обеспечивает равномерную прожарку, сохраняет румяную корочку, сочность и аппетитный вид, полностью сберегает минерально-витаминный состав. Возможности хоспер-меню позволяют одновременно удовлетворять запросы, как утонченных гурманов, так и ценителей просто вкусной и одновременно полезной пищи. Блюда из мяса и овощей, птицы и рыбы, приготовленные в хоспере, превращают обычный обед в настоящее пиршество вкуса, аромата и удовольствия</Typography>

  </Grid>
  
</Grid>
      </div>
      
    
    </div>
  )
}
export default AboutUs;