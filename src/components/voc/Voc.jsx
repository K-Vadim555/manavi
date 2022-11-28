import { Button, Typography } from '@mui/material'
import React from 'react'
import hinc from './img/Hinkali-dostavka-mos 3.png'
import './voc.scss'
import line from '../../img/Line 2.png'
import Slider from "react-slick";
import dog from './img/Rectangle 16.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import prev from './img/Vector 3.png'
import next from './img/Vector 2.png'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      >
        <img className='prav' style={{
            marginLeft:'-4vw',
            background: '#85241F',
            padding:'.5vw',
            width:'1vw',
            height:'1vw',
            borderRadius:'50%'
        }} src={next} alt='erfe'></img>
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
       <img className='lev' style={{
         background: '#85241F',
         padding:'.5vw',
         height:'1vw',
         borderRadius:'50%',
            marginRight:"-4vw",
            width:'1vw'
        }} src={prev} alt='erfe'></img>
     
      </div>
    );
  }
export const Voc = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        cssEase: "linear",
        
     
      
        nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        
      };
      const text = [1,2,3,4]
      const newText = text.map((p) => 
      <div key={p} className='w'>
        <div className="voc-card">
        <img className='dog' src={dog} alt="" />
            <div className="text">
                <p className='p'>Повар</p>
                <p className='pp'>«Saperavi» — это уникальный ресторан, сочетающий в себе современную культуру экодизайна, экзотическую кухню юго-восточных стран Азии и современной Грузии. 
        </p> 
                <div className="d">
                    <div className="d-d">
                        <p className='list-p list-p1'>Требования:
        </p>
                        <ul className='ul'>
                <li>
                <p className="list-p">Опыт работы от 2 летewcc</p>
            </li>
            <li>
                <p className="list-p"> Документ об образовании</p>
            </li>
            <li>
                <p className="list-p">Наличии несудимости</p>
            </li>
            
                </ul>
                    </div>
                    
                    <div className="d-d">
                    <p className='list-p list-p1'>Мы предлагаем:

        </p>
                        <ul >
                <li>
                <p className="list-p">Достойную заработную плату</p>
            </li>
            <li>
                <p className="list-p">Полное трудоустройство</p>
            </li>
            <li>
                <p className="list-p">Медицинское страхование:</p>
            </li>
                </ul>
                
                    </div>
                    
                </div>
                <Button variant='contained'
      style={{
        background:"#85241F",
        color:'white',
        borderRadius: '55px',
        fontFamily: 'BPG Glaho',
        fontStyle: 'normal',
        fontWeight:' 400',
        fontSize: '1.3vw',
        lineHeight: '30px',
        textAlign: 'center',
        marginTop:'1vw',
        display:"flex",
        marginLeft:'2vw',
        marginRight:'auto',
       
        width:"20vw",
        height:"4vw"

    }}>Прикрепить CV</Button>
            </div>
        </div>
        <div className="i">
                    <div className="d-d">
                        <p className='list-p list-p1'>Требования:
        </p>
                        <ul className='ul'>
                <li>
                <p className="list-p">Опыт работы от 2 летewcc</p>
            </li>
            <li>
                <p className="list-p"> Документ об образовании</p>
            </li>
            <li>
                <p className="list-p">Наличии несудимости</p>
            </li>
            
                </ul>
                    </div>
                    
                    <div className="d-d">
                    <p className='list-p list-p1'>Мы предлагаем:

        </p>
                        <ul >
                <li>
                <p className="list-p">Достойную заработную плату</p>
            </li>
            <li>
                <p className="list-p">Полное трудоустройство</p>
            </li>
            <li>
                <p className="list-p">Медицинское страхование:</p>
            </li>
                </ul>
                
                    </div>
                    
                </div>
                <p className='ppp'>«Saperavi» — это уникальный ресторан, сочетающий в себе современную культуру экодизайна, экзотическую кухню юго-восточных стран Азии и современной Грузии. 
        </p> 
      
    </div>
    
      )
  return (
    <div id='voc' className='voc'>
     <Typography textAlign='start' className='contact-title ' color='secondary'>Вакансии</Typography>
    <img className='a2' src={line} alt="" />
     <Typography className='r' textAlign='start' sx={{
       marginLeft:'7.8vw',
       marginBottom:'2vw',
       color: '#BFBFBF',
       fontSize: '1vw',
       width:'25vw',
       letterSpacing: '0.07em',
     }}
     >დაჯავშნე მაგიდა</Typography>
     <img className='hinc' src={hinc} alt="" />
     <div >
         <Slider className='voc-slider'  {...settings}>
        {newText}
      
      
    </Slider>
     </div>
    
     </div>
  )

  
}
export default Voc;
