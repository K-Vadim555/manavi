import React, {useState} from 'react'
import list from './data'
import Cards from './card'
import '../styles/amazon.scss'
import Categories from './Categories'
import Drawer from './ui/drawer(popup)/DrawerCart'
import TemporaryDrawer from './ui/drawer(popup)/DrawerCart'
import TitleP from './TitleP'

const Amazon = ({handleClick}) => {
  let [orders, setorders] = useState([])
 
  let [items, setitems] = useState(list)
  let [currentItems, setcurrentItems] = useState(list)
  let chooseCategory = (category) => {
    if(category === 'all') {
      setcurrentItems(items)
      return 
    }
   

    
      setcurrentItems(items.filter(el => el.category === category))   
    
  }

  
      
   let addToOrder = (item) => {
      let isInArray = false
      orders.forEach(el => {
        if(el.id === item.id) 
        isInArray = true
      })
      if (!isInArray)
        this.setState({ orders: [...orders, item] })
    }
    
  return ( <div className='Amazon'> <TitleP title={'Меню'}/>
   <div className='sec'> 
    <div className="filtr-mob"><TemporaryDrawer chooseCategory={chooseCategory}/></div>
    
    <div className="filtr-des">
      <Categories chooseCategory={chooseCategory}/>
      </div> 
    <section > 
   
        {currentItems.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} onAdd={addToOrder}/>
           
        ))}
    </section>
    </div>
  </div>
  
    
  )
}

export default Amazon