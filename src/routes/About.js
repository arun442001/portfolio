import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg from '../Components/Heroimg'
import Aboutcontent from '../Components/Aboutcontent'


function About() {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimg heading= "ABOUT" text= "I am a Front-End Developer"></Heroimg>
<Aboutcontent></Aboutcontent>
       <Footer></Footer>
    </div>
  )
}

export default About
