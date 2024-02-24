import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg from '../Components/Heroimg'
import Work from '../Components/Work'



function Project() {
  return (
    <div>
       <Navbar></Navbar>
       <Heroimg heading="PROJECT" text="Discover a showcase of my recent projects and creative endeavors"></Heroimg>
       <Work></Work>
       <Footer></Footer>
      
    </div>
  )
}

export default Project
