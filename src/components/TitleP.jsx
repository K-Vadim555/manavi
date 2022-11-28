import { Typography } from '@mui/material'
import React from 'react'
import line from '../img/Line 2.png'
export default function TitleP({title}) {
  return (
    <>     
     <Typography sx={{
        color: 'White',
        fontSize: '2.6vw',
        width:'fit-content',
        letterSpacing: '0.07em',
        margin:'0 auto',
        marginTop: '1vw',
        
      }}
      >{title}</Typography>
       <img style={{
        display:'flex',
        margin:'1vw auto'
       }} src={line} alt="" />
      <Typography sx={{
        color: '#BFBFBF',
        fontSize: '1vw',
        width:'fit-content',
        letterSpacing: '0.07em',
        marginBottom: '1vw',
        marginLeft: '48vw',
      }}
      >მენიუ</Typography></>
  )
}
