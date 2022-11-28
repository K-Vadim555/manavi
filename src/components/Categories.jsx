import React, { useState } from 'react'
import '../index.css'
import '../styles/categories.scss'
export default function Categories(props) {
    let [categories, setcategories] = useState( [
        {
            key: 'all',
            name: 'Всё',
            icon: 'firstDishes.svg',
        },
        
        {
            key: 'breakfasts',
            name: 'Завтраки',
            icon: 'breakfasts.svg',
        },
        {
            key: 'snacks',
            name: 'Закуски',
            icon: 'snacks.svg',
        },
        {
            key: 'firts dishes',
            name: 'Первые блюда',
            icon: 'firstDishes.svg',
        },
        {
            key: 'hot dishes',
            icon: 'hotDishes.svg',
            name: 'Горячие блюда',
        },
        {
            key: 'salads',
            icon: 'salads.svg',
            name: 'Салаты',
        },
        {
            key: 'desserts',
            icon: 'deserts.svg',
            name: 'Десерты',
        },
    ])
  return (
    <div className='categories'>
    {categories.map(el => (
        <div className='categoriesBoxWrapper' key={el.key} onClick={() => props.chooseCategory(el.key)}>
            <div className="categoriesBox">
            <img src={'./icon/' + el.icon} alt="" /> <p>{el.name}</p> 
            </div>
        </div>
    ))}
  </div>
  )
}
