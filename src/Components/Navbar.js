import React, { useState } from 'react';
import '../Components/Navbar.css'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  const [hamburger, setHamburger] = useState(true);
  const [color, setColor] = useState(false)
  function hamburderChange(){
    setHamburger(!hamburger)

  }
  function colorChnage(){
    if(window.scrollY > 115){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', colorChnage)
  console.log(hamburger);
  return (
    <div className={color ? "header header_bg": "header"}>
      
        <Link to={'/'}><h1>Portfolio</h1></Link>

      
      <ul className= {hamburger ? "nav_menu active" : "nav_menu"}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        
        
       <li> <Link to={'/project'}>Project</Link></li>
      <li>  <Link to={'/contact'}>Contact</Link></li>
      </ul>
     <div className='hamburger' onClick={()=> hamburderChange()}>
     {hamburger ? ( <FaTimes size={20} style={{
        color: "#ffffff", cursor: "pointer"
      }}></FaTimes>) : (<FaBars size={20} style={{
        color: "#ffffff", cursor: "pointer"
      }}></FaBars>)}
    
      
     </div>

    </div>
  )
}

export default Navbar
