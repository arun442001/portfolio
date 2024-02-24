import React from 'react';
import './Aboutcontent.css';
import { Link } from 'react-router-dom';
import img_bg from '../img/programming-background-collage.png';
import img_react from '../img/react_img.webp'
function Aboutcontent() {
  return (
    <div className='about-content'>
      <div className='row mx-auto'>
        <div className='col-lg-6 col-md-12 col_flx'>
          <h1>Who I am</h1>
          <p>
            I specialize in developing websites using HTML, CSS, and JavaScript,
            tailored to meet client requirements. My expertise includes creating
            responsive designs optimized for various mobile devices. I have also
            learned React, a popular JavaScript library for building user interfaces.
          </p>
          <Link to="/contact">
            <div className='btn btn_new'>Contact</div>
          </Link>
        </div>
        <div className='col-lg-6 col-md-12'>
          <div className='img_section'>
            <div className='img_bg_div'>
                <img src={img_bg}></img>
            </div>
            <div className='img_react_div'>
                <img src={img_react}></img>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutcontent;
