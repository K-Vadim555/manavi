import React from 'react'

const Cards = ({ item, handleClick , onAdd }) => {
    const {id, title, author, price, img} = item
  return (
    <div className="cards">
       
            <img src={img} alt="" />
       
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p className='price'>{price} MDL</p>
            <button onClick={() => handleClick(item)} >Добавить в Корзину</button>
        </div>
    </div>
  )
}

export default Cards;