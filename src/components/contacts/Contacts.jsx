import { Box, TextField, Typography } from '@mui/material';
import React from 'react'
import './contacts.scss'
import line from '../../img/Line 2.png'
import hin from './img/hin.png'

import hinn from './img/hinn.png'
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import icon4 from './img/icon4.png'
import sot from './img/Group 30.png'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


export const Contacts = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name,setName] = React.useState('')
  const [nam,setNam] = React.useState('')
  const [tel,setTel] = React.useState('')
  const [num,setNum] = React.useState('')

  const [nameer,setNameer] = React.useState(false)
  const [teler,setTeler] = React.useState(false)
  const [numer,setNumer] = React.useState(false)

   const err = (e) => {
    
        if (name == e.target.value , tel == e.target.value ,num == e.target.value) {
          setNam('')
    }
    else {
      setNam('')
    }
  }
  const click = (e) => {
  
    e.preventDefault()
    if (name == '',tel == '',num== '') {
       setNam(<Typography
       textAlign='center'
       color='error'
       border='1px solid red'
    
       marginBottom='1vw'
      
       padding='0.5vw'

       >Одно или несколько полей содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте ещё раз.</Typography>)
    }

     
     
   
    setTeler(false)
    setNameer(false)
    setNumer(false)

    if (name == '') {
      setNameer(true)
    }
    if (tel == '') {
      setTeler(true)
    }
    if (num == '') {
      setNumer(true)
    }
   
  
  

 
 }
  return (
    <div id='contacts' className='contacts'>
       <Typography textAlign='start' className='contact-title ' color='secondary'>Контакты</Typography>
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
        <img className='hin' src={hin} alt="" />
        <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11026.730100080755!2d28.6546433!3d46.296281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdd6ee4c5d096ffc!2sManavi%20Restaurant!5e0!3m2!1sru!2s!4v1658138974502!5m2!1sru!2s"
             style={{
              
              width: '100%',
              height:" 35vw" ,
              border: "0",
              allowfullscreen:"", 
              loading:"lazy" ,
              referrerpolicy:"no-referrer-when-downgrade",
              zIndex:"60"

            }}></iframe>
            <div className='tel-Manavi'>
                <p className='title' >“Manavi”</p>
                <p className='second-title'> попробуй Грузию на вкус</p>
                <div className='icon1'>
                    <img src={icon1} alt="" />
                    <Typography className='p'>Пн. - Вс. 09:00 - 00:00</Typography>
                </div>
                <div className='icon1'>
                    <img src={icon2} alt="" />
                    <Typography className='p'>+373-79-559-338</Typography>
                </div>
                <div className='icon1'>
                    <img src={icon3} alt="" />
                    <Typography className='p'>г.Комрат , ул.Ленина 127/А</Typography>
                </div>
                <div className='icon1'>
                    <img src={icon4} alt="" />
                    <Typography className='p'>manavi@gmail.com</Typography>
                </div>
                <Button 
              
                onClick={handleOpen}

                 variant='outlined' style={{
                    transition: 'all ease 5s',
                    border: '2px solid #85241F',
                    borderRadius: '55px',
                    fontFamily: 'BPG Glaho',
                    fontStyle: 'normal',
                    fontWeight:' 400',
                    fontSize: '1.2vw',
                 
                    textAlign: 'center',
                    margin:'1vw 0',
                    color: '#424141',
                    marginBottom:"2vw",
                    width:"20vw",
                    height:"4vw"

                }}>Обратный звонок</Button><br></br>
                <img className='ww' style={{
                    width:'13vw',
                    display:'flex',
                    marginRight:'auto'
                }} src={sot} alt="" />
            </div>
            <div>
     
      <Modal
       
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box maxWidth='20vw' sx={{
           position: 'absolute' ,
           top: '50%',
           left: '50%',
           transform: 'translate(-50%, -50%)',
           width: 400,
           bgcolor: 'background.paper',
           border: '2px solid #000',
           boxShadow: 24,
           p: 4,
           
        }}>
          <Typography
       
           textAlign='center' m=' 0 auto' id="modal-modal-title" variant="h6" component="h2">
          Напишите нам
          </Typography>
          <form noValidate autoComplete='off' onSubmit={click} >
            <TextField 
          onChange={(e) => setName(e.target.value)}
           error={nameer}
          autoFocus
          variant='standard'
          fullWidth
           margin='dense'
          m=' 0 auto'
         
           
           label='Имя'
           type='name'
           required
           
           color='primary'
          />
              <TextField 
                onChange={(e) => setTel(e.target.value)}
                error={teler}
          variant='standard'
          fullWidth
           margin='dense'
          m=' 0 auto'
         
           
           label='E-mail'
           type='email'
           required
           
           color='primary'
          />
              <TextField 
               onChange={(e) => setNum(e.target.value)}
               error={numer}
          variant='standard'
          fullWidth
           margin='dense'
          m=' 0 auto'
          multiline
          minRows={3}
          
           label='Сообщение'
           type='text'
           required
           
           color='primary'
          /> 
          
           <Button 
              type='submit'
              onClick={err}
                className='modal-btn'
               variant='contained' style={{
                  display:'flex',
                  transition: 'all ease 5s',
                  border: '2px solid #85241F',
                  borderRadius: '55px',
                  fontFamily: 'BPG Glaho',
                  fontStyle: 'normal',
                  fontWeight:' 400',
                  fontSize: '1.2vw',
                  lineHeight: '30px',
                  textAlign: 'center',
                  margin:'1vw auto',
                  color: 'white',
                  marginBottom:"2vw",
                  width:"100%",
                  height:"4vw",
                  background:'red'

              }}>Отправить</Button>
          </form>
          {nam}
          
        </Box>
       
      </Modal>
    </div>
    </div>
        
  )
}
export default Contacts;
