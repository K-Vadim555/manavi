import React from 'react'
import './footer.scss'
import { Button, IconButton, TextField, Typography } from '@mui/material'
import logo from '../../img/logo.png'
import { Box } from '@mui/system'
import { act } from 'react-dom/test-utils'
import { Routes , Route , Link} from 'react-router-dom'


export const Footer = () => {
    const [col,setCol] = React.useState('black')
    const [mar,setMar] = React.useState('0vw')
    const [em,setEm] = React.useState('')
    const [eme,setEme] = React.useState(false)
    const [nam,setNam] = React.useState('')
    
    
    const eerr = (e) => {
       
        if (  em == e.target.value ) {
          setNam('')
    }
    else {
      setNam('')
    }
   }
   const clickk = (e) => {
  
    e.preventDefault()
    if (em == '') {
       setNam(<Typography
       
       textAlign='center'
       color='error'
       border='1px solid red'
       marginTop='1vw'
       marginLeft='0'
       marginBottom='1vw'
       width='31vw'
       padding='0.5vw'
       onToggle={newpost}


       > Поле содержат ошибочные данные. Пожалуйста, проверьте его и попробуйте ещё раз.</Typography>)
    }

     
     
   
    setEme(false)
    
    if (em == '') {
      setEme(true)
      setCol('red')
    }
    
  
  

 
 }
 const newpost = () => {
    if( eme == true){
          setMar('0vw')
    }
}
let [cartOpen, setCartOpen] = React.useState(false)
  return (
    <div className="t">
         <div 
  
    className='footer'>
        <img src={logo} alt="" />
        <Box className='menu-links' >
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
             <Link to='/' className='link'  variant='h7' >О нас</Link>
          </IconButton>
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
              <Link   to='/Menu' className='link'  variant='h7' >Меню</Link>
          </IconButton>
          
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
            <a  href='#masa' className='link'  variant='h7' >Бронь</a>
          </IconButton>
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
            <a  href='#galary' className='link'  variant='h7' >Галерея</a>
          </IconButton>
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
             <a href='#contacts' className='link'  variant='h7' >Контакты</a>
          </IconButton>
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
             <a href='#voc' className='link'  variant='h7' >Вакансии</a>
          </IconButton>
         
          
          
          </Box>
          <div className="footer-input">
            <Typography textAlign='start'>Хотите получать предложения об акциях ?</Typography>
            <div >
            <form className="input" noValidate autoComplete='off' onSubmit={clickk} >
                <input
                 onChange={(e) => setEm(e.target.value)}
                 
                   variant='standard'
                   placeholder='Введите E-Mail'
              
                  
                  
                   color={col}
                   
                  
                  id='email'
                
                 name='eme'
                  type='email' 
            
                  />
       
           <Button
           type='submit'
           variant='contained' 
           onClick={eerr}
           >Подписаться</Button>  
         
             </form>
               {nam}
            </div>
         
          </div>
          
    </div>
    <Box className='menu-links2' >
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
             <a href='#aboutus' className='link'  variant='h7' >О нас</a>
          </IconButton>
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
              <Link  to='/Menu' className='link'  variant='h7' >Меню</Link>
          </IconButton>
          
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
            <a  href='#masa' className='link'  variant='h7' >Бронь</a>
          </IconButton>
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
            <a  href='#galary' className='link'  variant='h7' >Галерея</a>
          </IconButton>
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
             <a href='#contacts' className='link'  variant='h7' >Контакты</a>
          </IconButton>
          <IconButton  edge='start' 
            color='inherit' aria-label='menu'>
             <a href='#voc' className='link'  variant='h7' >Вакансии</a>
          </IconButton>
         
          
          
          </Box>  <Typography style={{
              
            fontSize:'1vw',
            fontFamily: 'Monsterrat',
            fontStyle: 'normal',
            fontWeight: '400',
            color:'white',
            textAlign: 'center',
            padding:'1vw 0'
           }}>2022 ©CREATED BY WOX-STUDIO</Typography>
    </div>
   
  )
}
export default Footer;