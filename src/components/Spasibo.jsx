
import React, { Component } from 'react'





import { Link } from 'react-router-dom';


import ine from '../img/img/Line 2.png'
import ros from '../img/img/ros.png'
import  './oformiti/Oformiti.scss'
import shag1 from '../img/img/Group 95 1.png'
import { Box, Button, Checkbox, Dialog, DialogContent, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';

export default class Spasibo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Курочка Табака с приправой “Мимино”',
          img: 'kureTabaka.png',
          desc: 'Курица, томаты,красный...',
          gram: '420 г',
          category: 'hot dishes',
          price: '135 MDL'
        },
        {
          id: 2,
          title: 'Национальный грузинский салат “Тбилиси”',
          img: 'Salad.png',
          desc: 'Кабачки, помидоры Черри...',
          gram: '230 г',
          category: 'salads',
          price: '85 MDL'
        },
        {
          id: 3,
          title: 'Десертная тарелка “Лесная поляна”  ',
          img: 'sweets.png',
          desc: 'Лесные орехи, фундук...',
          gram: '180 г',
          category: 'desserts',
          price: '68 MDL'
        },
        {
          id: 4,
          title: 'Блины с беконом',
          img: 'blini.png',
          desc: 'Блины, бекон покрытый...',
          gram: '200/50 г',
          category: 'breakfasts',
          price: '60 MDL'
        },
        {
          id: 5,
          title: 'Ассорти мясных деликатесов',
          img: 'Asorti.webp',
          desc: 'говядина, свинина, курица...',
          gram: '300/50 г',
          category: 'snacks',
          price: '180 MDL'
        },
        {
          id: 6,
          title: 'Суп с тефтелями',
          img: 'tefteli.png',
          desc: 'суп, тефтели, сметана...',
          gram: '350 г',
          category: 'firts dishes',
          price: '65 MDL'
        },
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }

















  
  render() {
    return (
      <div className='y'>
        
          <div className='y'>   <Typography textAlign='start' className='contact-title ' color='secondary'>Оформление заказа</Typography>
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
      <p className="p">Спасибо, Ваш заказ успешно оформлен!</p>
      
      </div>
      </div>
    )
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items })
      return 
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)  
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
      
    addToOrder(item) {
      let isInArray = false
      this.state.orders.forEach(el => {
        if(el.id === item.id) 
        isInArray = true
      })
      if (!isInArray)
        this.setState({ orders: [...this.state.orders, item] })
    }
    
}