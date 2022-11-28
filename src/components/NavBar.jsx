import React from 'react'
import Cart from './cart.svg'
import '../styles/navBar.scss'
import logo from '../img/logo.png'
import num from '../img/num.svg'
import { Routes , Route , Link, BrowserRouter} from 'react-router-dom'
import PersistentDrawerRight from './ui/drawer(popup)/DrawerHeader'
import SwipeableTemporaryDrawer from './ui/drawer(popup)/DrawerHeader'
const Navbar = ({setShow, size}) => {
  let posts = [
    {
      id: 1,
      link:  <Link to='/'  className="myShop"  >
      О нас
    </Link>
     
    },
    {
      id: 2,
      link:  <Link to='/a'  className="myShop"  >
      Меню

    </Link>
    },
    {
      id: 3,
      link:  <Link to='/'  className="myShop"  >
      Бронь
    </Link>
    },
    {
      id: 4,
      link:  <Link to='/'  className="myShop"  >
      Галерея
    </Link>
    },
    {
      id: 5,
      link:  <Link to='/'  className="myShop"  >
      Контакты
    </Link>
    },
    {
      id: 6,
      link:  <Link to='/'  className="myShop"  >
      Вакансии
    </Link>
    },
  ]
  return (
    <nav>
        <div className="navBox">
            <Link to='/' className="logo"  >
              <img src={logo} alt="" />
            </Link>
            <div className='box'>
            <img style={{
              width:'1.1vw',
              marginRight:'1vw'
            }} src={num} alt="" />
            <p
            
          >
            +373-79-559-338
          </p>
            </div>
            
          <ul className="links">{posts.map((lin) => 
         <li key={lin.id}>{lin.link}</li> 
          )}</ul>

          
            <Link to='/b' className="cart"  >
               <span>{size}</span>
                <span>
                    <img src={Cart} alt="Корзина" />
                </span>
                
            </Link> 
             <SwipeableTemporaryDrawer posts={posts}/>
        </div>
    </nav>
  )
}

export default Navbar