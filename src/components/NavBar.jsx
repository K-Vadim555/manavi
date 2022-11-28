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
      link:  <a href='#aboutus'  className="myShop"  >
      О нас
    </a>
     
    },
    {
      id: 2,
      link:  <Link to='/a'  className="myShop"  >
      Меню

    </Link>
    },
    {
      id: 3,
      link:  <a href='a'  className="myShop"  >
      Бронь
    </a>
    },
    {
      id: 4,
      link:  <a href='a'  className="myShop"  >
      Галерея
    </a>
    },
    {
      id: 5,
      link:  <a href='a'  className="myShop"  >
      Контакты
    </a>
    },
    {
      id: 6,
      link:  <a href='a'  className="myShop"  >
      Вакансии
    </a>
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