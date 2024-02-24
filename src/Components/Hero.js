import React from 'react';
import '../Components/Hero.css';
import img_girl from '../img/medium-shot-woman-working-laptop.jpg'; // Remove curly braces
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='hero'>
        <div className='bg_girl'>
            <img src={img_girl} alt="Girl working on laptop" />
        </div>
        <div className='content'>
            <p>Hi, I'm Naveena</p>
        <h1>Frontend Developer</h1>
        <div>
           <Link to={'/project'} className='btn'>Project</Link>
           <Link to={'/contact'} className='btn btn_transparent'>Contact</Link>
        </div>
        </div>
        </div>
    );
}

export default Hero;
