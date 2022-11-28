import { Box, Button, Checkbox, Dialog, DialogContent, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { createTheme } from '@mui/material/styles';
import './Masa.scss'
import Maasa from '../../img/Group 32.png'
import { color } from '@mui/system';
import { click } from '@testing-library/user-event/dist/click';
import  ExpandMoreIcon  from '@mui/icons-material/ExpandMore';
import line from '../../img/Line 2.png'
const theme = createTheme({
  palette: {
    primary: {
      light: '##fff',
      main: '##fff',
      dark: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export const Masa = () => {

  
  const [name,setName] = React.useState('')
  const [nam,setNam] = React.useState('')
  const [tel,setTel] = React.useState('')
  const [num,setNum] = React.useState('')
  const [time,setTime] = React.useState('')
  const [data,setData] = React.useState('')
  const [nameer,setNameEr] = React.useState(false)
  const [teler,setTelEr] = React.useState(false)
  const [numer,setNumer] = React.useState(false)
  const [timeer,setTimer] = React.useState(false)
  const [dataer,setDataer] = React.useState(false)
   const err = (e) => {
    
        if (name == e.target.value , tel == e.target.value ,num == e.target.value,data == e.target.value,time == e.target.value) {
          setNam('')
    }
    else {
      setNam('')
    }
   }
   const click = (e) => {
  
      e.preventDefault()
      if (name == '',tel == '',num== '',data== '',time== '') {
         setNam(<Typography
         textAlign='center'
         color='error'
         border='1px solid red'
        
         marginBottom='1vw'
        
         padding='0.5vw'

         >Одно или несколько полей содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте ещё раз.</Typography>)
      }

       
       
     
      setTelEr(false)
      setNameEr(false)
      setNumer(false)
      setTimer(false)
      setDataer(false)
      if (name == '') {
        setNameEr(true)
      }
      if (tel == '') {
        setTelEr(true)
      }
      if (num == '') {
        setNumer(true)
      }
      if (time == '') {
        setTimer(true)
      }
      if (data == '') {
        setDataer(true)
      }
    
    

   
   }
  
   return (
    <div id='masa' className='App'> 
        <h2  style={{
        marginLeft: '8vw',
        display: 'none',
         textAlign: 'start',
         fontSize:'3vw',
         color:'white',
         marginBottom:'2vw ',
         width: '13vw',
         marginRight:'0r'
     }}> Забронировать стол</h2>
     

     <Typography className='contact-title' fontSize='3vw'
      color='white'
       maxWidth='60vw'
       mr={2}
       >Забронировать стол</Typography>
        <img className='Line' src={line} alt="" />
        <Typography className='r' textAlign='start' sx={{
          
          color: '#BFBFBF',
          fontSize: '1vw',
          width:'25vw',
          letterSpacing: '0.07em',
          marginLeft:'8vw'
        }}
        >დაჯავშნე მაგიდა</Typography>
        
     
   
        <Grid container spacing={2}>
  <Grid item xs={7}>
     <form className='form' action="#" style={{
      marginTop:'3vw'
     }} noValidate autoComplete='off' onSubmit={click}>
       
            <div className="columns_wrapper">
              <div className="left column">
                <TextField 
                variant='standard'
                onChange={(e) => setName(e.target.value)}
                error={nameer}
                id='name'
                
                required
                className='Name' placeholder="Имя" type="text" />
                <select    onChange={(e) => setNum(e.target.value)}
              
                
               
                
                type='number'
                required
               
               name="Geusts" id="Geusts">
                  <option value="1">1 гость</option>
                  <option value="2">2 гостя</option>
                  <option value="3">3 гостя</option>
                  <option value="4">4 гостя</option>
                  <option value="5">5 гостя</option>
                  <option value="6">6 гостя</option>
                  <option value="7">7 гостя</option>
                  <option value="8">8 гостя</option>
                  <option value="9">9 гостя</option>
                  <option value="10">10 гостя</option>
                  <option value="11">11 гостя</option>
                  <option value="12">12 гостя</option>
                  <option value="13">13 гостя</option>
                  <option value="14">14 гостя</option>
                  <option value="15">15 гостя</option>
                  <option value="16">16 гостя</option>
                  <option value="17">17 гостя</option>
                  <option value="18">18 гостя</option>
                  <option value="19">19 гостя</option>
                  <option value="20">20 гостя</option>
                  <option value="21">21 гостя</option>
                </select>
              </div>
              <div className="right column">
                <TextField variant='standard'  onChange={(e) => {setTel(e.target.value) }}
            id='tel'
            type='tel' 
            required
            error={teler}
            className="Number"
             placeholder="Телефон"  />
                <div className="row">
                  <TextField variant='standard'  onChange={(e) =>
                   setData(e.target.value)}
               error={dataer}
                id='date'
               
                required 
                 className="date" type="date" />
                  <TextField variant='standard' onChange={(e) => setTime(e.target.value)}
               error={timeer}
            
                id='time'
               
                required
                
                color='primary' className="time" type="time" />
                </div>
              </div>
            </div>
            <FormGroup>
      <FormControlLabel  control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 18, color: 'black' } }}  defaultChecked />} label="Хотите получать актуальную информацю?" />
     
       </FormGroup>
            {nam}
            <Button 
              type='submit'
              variant='contained' 
              onClick={err}
              className='btn'
              >Забронировать стол</Button>
          

        </form>
  </Grid>
  <Grid item xs={5}
  
   
   >
    <img className='bludo' margin='dense'
     style={{ 
       width:'100%',
      maxWidth:'100%',
      
    }} src={Maasa} alt="jgvjvj" />
  </Grid>
 
  
</Grid>
      
       

        
      
        
       
      
         
           
       

       
     </div>
  )
}
export default Masa;
