import React from 'react';
import './Footer.css'

import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='flex_lft'>
                <div className='location'>
                    <FaHome size={20} style={{
                        color: '#fff'
                    }}></FaHome>
                    <span className='adress_home'>1/52A middle street, Sengunam(po), Perambalur(Dt).</span>
                </div>
                <div className='phone'>
                <FaPhone size={20} style={{
                        color: '#fff'
                    }}></FaPhone>
                  <a href="tel:+916383345803">+91 6383345803</a>

                </div>
                <div className='mail'>
                <FaMailBulk size={20} style={{
                        color: '#fff'
                    }}></FaMailBulk>
                   <a href="mailto:rnaveenabe@gmail.com">rnaveenabe@gmail.com</a>


                </div>
                <div className='linkedin'>
                <FaLinkedin size={20} style={{
                        color: '#fff'
                    }}></FaLinkedin>
                  <a href="https://www.linkedin.com/in/naveena18/">Connect with me on LinkedIn</a>



                </div>
            </div>
            <div className='flex_ryt'>
                <div className='About_me'>
                   <h2>About me</h2>
                   <p>Passionate frontend developer with a creative flair and a knack for turning ideas into captivating digital experiences. Proficient in HTML, CSS, and JavaScript, dedicated to crafting clean, user-friendly interfaces. Eager learner and team player, committed to delivering high-quality solutions that exceed expectations.</p>


                </div>
            </div>
        </div>
       




      
    </div>
  )
}

export default Footer
