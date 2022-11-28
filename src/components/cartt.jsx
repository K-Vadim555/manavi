import React, { useState, useEffect } from "react";
import "../styles/cart.scss";
import Arrow from '../img/backArrow.svg'
import line from '../img/Line 2.png'
import HinkaliD from '../img/HinkaliD.png'
import Around from '../img/around.png'
import { Routes , Route , Link} from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear';
import { Typography } from "@mui/material";
import TitleP from "./TitleP";
const Cartt = ({ cart, setCart, handleChange , size }) => {
    const [price, setPrice] = useState(0);
    let siz = size
    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();

    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.amount * item.price));
      setPrice(ans);
      if ( ans !== 0){
        setno(<> </>)
        
      }
      else {
        setno( <p className="tovno">Ваша корзина пока пуста.</p>)
       
      }
    
    };
   let [no, setno] = useState('')
    useEffect(() => {
      handlePrice();
    } );
  
    return (<div className="Cart">   
      <TitleP title={'Корзина'}/>
     <div className="menu-basket">
  

            <div className="article">
        <div className="no">
             {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            
            <div className="cart_img"> <button className="cart-delete-icon" onClick={() => handleRemove(item.id)}><ClearIcon/></button>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
          
            <div className="count">
            <button className="count-button2" onClick={() => handleChange(item, -1)}>-</button>
              <p>{item.amount}</p>   
              <button className="count-button1" onClick={() => handleChange(item, 1)}>+</button>
           
              <span >{item.price} MDL</span>
             
          
            </div>
         
          </div>
        ))}
        
     
        <div className="total">
         
          {no}
        </div>
        </div>
       
      </div>
      <div className="hin-of">
        <div className="summa">
          <p className="itogo">ИТОГО</p>
          <div className="">
            <p>Доставка</p>
            <span>Бесплатно</span>
          </div>
          <div className="">
            <p>Блюда</p>
            <span>x{siz}</span>
            <span>{price} MDL</span>
          </div>
          <p className="itogo1">{price} MDL</p>
          <Link to="/Oformiti">Заказать</Link>
        </div>
        <div className="around-hinkali">  <img className='hinkali' src={HinkaliD} alt="Хинкали в доставке" />
                          <img className='textAnim' src={Around} alt="Анимация" /> 

        </div>
      </div>
        
      
      </div>
      <Link  className='backButton ' to="/a"  ><img src={Arrow}/>Обратно к меню</Link>
    </div>
   
  
    );
  };
  
  export default Cartt;