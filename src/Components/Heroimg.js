import React from 'react'
import './Heroimg.css'
import lap_img from '../img/medium-shot-woman-working-laptop.jpg'

function Heroimg({heading, text}) {
  return (
    <div className='hero-img'>
        <div className='bg_girl'>
            <img src={lap_img}/>
        </div>
        <div className='center_content'>
        <h1>{heading}</h1>
            <div className='text_content'>{text}</div>


        </div>
        
       
        <div className='heading'>
            
        </div>

    </div>
  )
}

export default Heroimg
