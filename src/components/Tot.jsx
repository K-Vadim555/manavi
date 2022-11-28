import React, { useState ,useEffect } from 'react';
import '../App.css';
import { Routes , Route , Link, BrowserRouter} from 'react-router-dom'
import Amazon from './Amazon';

import Navbar from './NavBar';
import Cartt from './cartt';
import MainLogo from './main-logo/MainLogo';
import Sliderr from './slider/Sliderr';
import Masa from './masa/Masa';
import AboutUs from './About-us/AboutUs';
import Galary from './galary/Galary';
import Contacts from './contacts/Contacts';
import Voc from './voc/Voc';
export default function Tot({handleChange}) {


  
  return (
    <div className='tot'>
        <MainLogo/>
        <Sliderr/>
          <Masa/>
              <AboutUs/>
            <Galary/>
      <Contacts/>
      <Voc/> 
    </div>
  )
}
