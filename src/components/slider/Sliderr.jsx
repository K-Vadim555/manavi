import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pizza from '../../img/kure_tabaka_r 1.png'
import pizzza from '../../img/Frame_116_1 1.png'
import piza from '../../img/sweets 1.png'
import prev from '../../img/Vector 1.png'
import next from '../../img/Vector 2.png'
import './slider.scss'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { color } from '@mui/system';
import line from '../../img/Line 2.png'
import { Routes , Route , Link} from 'react-router-dom'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      
      sx={{ ...style, display:  'flex'  }}
      onClick={onClick}
    >
      <img style={{
      width:'2vw',
      height:"4vw"
     }} src={next}></img>
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      sx={{ ...style, display:  'flex'  }}
     
     
      onClick={onClick}
    >
     <img style={{
      width:'2vw',
      height:"4vw"
     }} src={prev}></img>
    </Box>
  );
}


export const Sliderr = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  
    nextArrow: <SampleNextArrow  />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 480,
          settings:{
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings:{
            slidesToShow: 2,
          }
        }
      ]

    
  };
  
  const posts = [
    {id: 1,
      img:'../../img/kureTabaka.png',
      title:'Курочка Табака с приправой  “Мимино” ',
      content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
     },
     {id: 2,
       img:'../../img/Sweets.png',
       title:'Курочка Табака с приправой  “Мимино” ',
       content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
      },
      {id: 3,
       img:'../../img/Salad.png',
      title:'Курочка Табака с приправой  “Мимино” ',
      content: 'Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы'
      }
  ]

 
  
  const postsss = posts.map(post =>   
   
    <Card key={post.id}  className='Card'
  >
     <Link className='m'  to='/a'>
  <Typography className='m' color='white' textAlign='end'>420 г</Typography>
  <img 
  className='card-img'
  src={post.img}
  
  
  />
  <CardContent>
    
    <h1 className='h1'></h1>
    <Typography className='m' color='white' variant='h5' gutterBottom >{post.title}</Typography>
    <Typography className='next-prev' color='white' gutterBottom >{post.content}</Typography>
    <Typography className='m'variant='h5' color='#FFC632'>135 MDL</Typography>
  </CardContent>

    </Link>
</Card>
 
  
  )
  
  return (
    <div id='menu' className='slider'>
      
    <h2  className='contact-title' style={{
       display: 'flex',
       marginLeft: '1vw',
        fontSize:'3vw',
        color:'white',
        marginBottom:'0'
    }}> Популярные блюда</h2>
    <img className='Linee' src={line} alt="" />
        <Typography  className='r' textAlign='start' sx={{
          
          color: '#BFBFBF',
          fontSize: '1vw',
          width:'25vw',
          letterSpacing: '0.07em',
          marginLeft:'1vw'
        }}
        >დაჯავშნე მაგიდა</Typography>
        
    <Slider {...settings}>
      {postsss}
      <Card className='card'>
        <Typography color='white' textAlign='end'>420 г</Typography>
        <img
        className='card-img'
        src='.http://manavi.md/wp-content/uploads/2022/07/veshki11-300x300.webp'
        title='Image title '
        />
        <CardContent>
          <Typography color='white' variant='h5' gutterBottom >Курочка Табака с приправой
 “Мимино”</Typography>
          <Typography color='white' gutterBottom >Курица, томаты,красный перец зелень соус “Мимино” гурзинские приправы</Typography>
          <Typography variant='h5' color='#FFC632'>135 MDL</Typography>
        </CardContent>

       
      </Card>
      
    </Slider>
  </div>

  )
}
 export default Sliderr;