
import React from 'react'
import { Link } from 'react-router-dom';


import ine from '../../img/img/Line 2.png'
import ros from '../../img/img/ros.png'
import  '../oformiti/Oformiti.scss'
import shag1 from '../../img/img/Group 95.png'
import { Box, Button, Checkbox, Dialog, DialogContent, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';



 export const Oformiti = () => {
  const [name,setName] = React.useState('')
  const [gut,setGut] = React.useState('')
  const [got,setGot] = React.useState('')
  const [get,setGet] = React.useState('')
  const [nam,setNam] = React.useState('')
  const [tel,setTel] = React.useState('')
  const [tal,setTal] = React.useState('')
  const [num,setNum] = React.useState('')
  const [time,setTime] = React.useState('')
  const [dat,setDat] = React.useState('/Oformiti')
  const [goter,setGoter] = React.useState(false)
  const [geter,setGeter] = React.useState(false)
  const [nameer,setNameEr] = React.useState(false)
  const [taler,setTaler] = React.useState(false)
  const [guter,setGuter] = React.useState(false)
  const [numer,setNumer] = React.useState(false)
  const [timeer,setTimer] = React.useState(false)
  const [dater,setDater] = React.useState(false)
   const err = (e) => {
    
        if (name == e.target.value , tel == e.target.value ,num == e.target.value,time == e.target.value , got == e.target.value, get == e.target.value , gut == e.target.value , tal == e.target.value) {
          setNam('')
         
    }
    else {
      setNam('')
      
    }
   }
   const click = (e) => {
  
      e.preventDefault()
      if (name == '',tel == '',num== '',time == '', got == '' ,get == '',gut == '',tal == '') {
       
        setNam(<Typography
         textAlign='center'
         color='error'
         border='1px solid red'
        
         marginBottom='1vw'
        
         padding='0.5vw'

         >Одно или несколько полей содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте ещё раз.</Typography>)
      }
      else {
        setDat('/sps')
      }
      

       
       
     
      setTaler(false)
      setNameEr(false)
      setNumer(false)
      setTimer(false)
      setDater(false)
      setGoter(false)
      setGeter(false)
      setGuter(false)
      if (name == '') {
        setNameEr(true)
      }
      if (tal == '') {
        setTaler(true)
      }
      if (num == '') {
        setNumer(true)
      }
      if (time == '') {
        setTimer(true)
      }
     
      if (got == '') {
        setGoter(true)
      }
      if (get == '') {
        setGeter(true)
      }
      if (gut == '') {
        setGuter(true)
      }
    
    

   
   }
   const [value, setValue] = React.useState('female');
   const [selectedValue, setSelectedValue] = React.useState('a')

   const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const showOrders = (props) => {
  
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (<div className='itemBlockWrapper'>
     
        <p className='summa'>Блюда: {new Intl.NumberFormat().format(summa)} MDL</p>
        <p className='summa2'> {new Intl.NumberFormat().format(summa)} MDL</p>
    </div>)
  }
  return (
    <div className='oformiti'>
        <Typography textAlign='start' className='contact-title ' color='secondary'>Оформление заказа</Typography>
       <img className='a2' src={ine} alt="" />
        <Typography className='r' textAlign='start' sx={{
          marginLeft:'7.8vw',
          color: '#BFBFBF',
          fontSize: '1vw',
          width:'25vw',
          letterSpacing: '0.07em',
        }}
        >გადახდა</Typography>
       
        
        <img className='ros' src={ros} alt="" />
      
         <img className='shag1' src={shag1} alt="" />
         <br></br>

         <form className='form' action="#" style={{
      marginTop:'3vw'
     }} noValidate autoComplete='off' onSubmit={click}>
        <FormGroup>
     
      <FormControlLabel sx={{marginRight: '2vw'}}  control={<Radio
      className='aux'
       value="b"
        name="radio-buttons"
        
         checked={selectedValue === 'b'}
        onChange={handleChange}
         sx={{ '& .MuiSvgIcon-root': { fontSize: '1.8vw'  } }}
           defaultChecked />}
            label="Доставка курьером" />
             <FormControlLabel  control={<Radio
             className='aux'
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a" 
        name="radio-buttons"
       
         sx={{ '& .MuiSvgIcon-root': { fontSize: '1.8vw'  } }} 
     />}
         label="Доставка курьером"  />
      
     
       </FormGroup>
    
    
            <div className="columns_wrapper">
              <div className="left column">
          
              <Typography
        
        className='input-title'
        sx={{ letterSpacing: '0.15rem' }}
        mb={2}
      >
        Введите адрес доставки :
      </Typography>      <div className="left-column-first">
                        <TextField    variant='standard'
                onChange={(e) => setName(e.target.value)}
                error={nameer}
                id='name'
                
                required
                className='Name' placeholder="Населеный пункт" type="text" />
                <TextField variant='standard' 
                onChange={(e) => setNum(e.target.value)}
               error={numer}
               id='num'
               required
               placeholder="Название улицы"
                type='text'
                
                
                />
                </div>
               <div className="left-column-second">
               <TextField    variant='standard'
                onChange={(e) => {setGot(e.target.value) }}
                id='tele'
                type='tel' 
                required
                error={goter}
               
                
                className='Name' placeholder="Номер дома"  />
                <TextField variant='standard' 
                onChange={(e) => setGet(e.target.value)}
               error={geter}
               id='num'
               required
               placeholder="Подъезд"
                type='text'/>
                <TextField variant='standard' onChange={(e) => setTime(e.target.value)}
               error={timeer}
            
                id='time'
                
                required
                placeholder="Квартира"
                color='primary' className="time" type="text" />
               </div>
                
              
              </div>
              <div className="right column">
              <Typography
        
        className='input-title'
        sx={{ letterSpacing: '0.15rem' }}
        mb={2}
      >
        Введите данные :
      </Typography>
      <div className="left-column-first">
      <TextField variant='standard'  onChange={(e) => {setGut(e.target.value) }}
            id='tel'
            type='tel' 
            required
            error={guter}
            className="Number"
             placeholder="Имя"  />
                <TextField variant='standard' 
               onChange={(e) =>
                setTal(e.target.value)}
            error={taler}
             id='date'
             placeholder='Телефон'
             required 
              className="date" type="text"
                
                
                />
                </div>
    
                
                <TextField variant='standard'  
                  placeholder='Телефон'
                 className="date" type="text" />
                
            
              </div>
            </div>
          
            {nam}
            <Button 
            sx={{
              zIndex:'1'
            }}
              type='submit'
              variant='contained' 
              onClick={err}
              className='btn'
              ><Link   className='bt'   onClick={err} sx={{
                zIndex:'-1'
              }} to={dat}  >Забронировать стол</Link></Button><br></br>
            

        </form>
        <div className="ifr">
             <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11026.730100080755!2d28.6546433!3d46.296281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdd6ee4c5d096ffc!2sManavi%20Restaurant!5e0!3m2!1sru!2s!4v1658138974502!5m2!1sru!2s"
             style={{
              
              display:'flex',
              width: '100%',
              height:" 25vw" ,
              border: "0",
              allowfullscreen:"", 
              loading:"lazy" ,
              referrerpolicy:"no-referrer-when-downgrade",
              zIndex:"60"

            }}></iframe>
            
        </div>
     
      
       
    </div>
  )
}

export default Oformiti ;