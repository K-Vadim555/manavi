import React, { useState ,useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar' 
import Amazon from './components/Amazon' 

import { Input } from '@mui/material';
import posts from './components/data'
import { Routes , Route , Link, BrowserRouter} from 'react-router-dom'
import Tot from './components/Tot';
import Navbar from './components/NavBar';
import Cartt from './components/cartt';
import Footer from './components/footer/Footer';
import ScrollToTop from './ScrollToTop';
import Oformiti from './components/oformiti/Oformiti';
import Spasibo from './components/Spasibo';
const App = () => {
  const [show, setShow] = useState(true);
  const [cartt, setCart] = useState([]);
 
  
  
  

  const handleClick = (item) => {
    if (cartt.indexOf(item) !== -1) return;
    setCart([...cartt, item]);
  };

  const handleChange = (item, d) => {
    const ind = cartt.indexOf(item);
    const arr = cartt;
    arr[ind].amount += d;

    setCart([...arr]);
    if (arr[ind].amount < 1) {
      arr[ind].amount = 1
      alert('jdjd')
    }
    
  };
  
  return (
    <>
    <ScrollToTop/>
     <Navbar setShow={setShow} size={cartt.length} />
    
    
   
      <Routes>
       
          <Route path='/' element={<Tot handleChange={handleChange} />} />
          <Route path='/a' element={<Amazon handleClick={handleClick} />} />
          <Route path='/b' element={ <Cartt cart={cartt}  size={cartt.length}   setCart={setCart} handleChange={handleChange} />} />
          <Route path='/Oformiti' element={ <Oformiti/>}/>
      <Route path='/sps' element={<Spasibo/>}/>
         
       
      </Routes>
  
    <Footer/>
    </>
  );
}

export default App;
