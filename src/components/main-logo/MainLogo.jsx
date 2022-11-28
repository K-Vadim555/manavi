import React from 'react'
import back from '../../img/slider.png'
import  '../../styles/header/Header.scss'
import './MainLogo.scss'
import { Box, Button,  Paper, Typography } from '@mui/material'
import back2 from '../../img/slider2.png'

import { Routes , Route , Link} from 'react-router-dom'
export const MainLogo = () => {
  return (
    <div className='App'>
         

         <Box className='box1' sx={{width:"100%", display: 'flex' }}>
        <img style={{
          position:'relative',
          top:'0',
          left:'0',
        width:'100%',
        zIndex:"-1"
      }} src={back} alt="ecec" />
      </Box>
      <Box className='box2' sx={{width:"100%",  display: 'none' }}>
        <img style={{
          position:'relative',
          top:'0',
          left:'0',
        width:'100%',
        zIndex:"1"
      }} src={back2} alt="ecec" />
      </Box>
      <Box className='btn-box'>
            <Button className='btn'  variant='contained'><Link className='btn' to='/a'>ПЕРЕЙТИ В МЕНЮ</Link></Button>
          </Box>
          <Typography className='main-text'  >Manavi - </Typography>
      </div>
  )
}
export default MainLogo ;
