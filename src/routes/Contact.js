import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg from '../Components/Heroimg'
import Form from '../Components/Form'


function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimg heading= "GET IN TOUCH" text= "Lets have a  chat"></Heroimg>
       <Form></Form>
       <Footer></Footer>
      
    </div>
  )
}

export default Contact
