
import React from "react";
import {Routes, Route} from 'react-router-dom'
import './index.css';
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";


function App() {
  return (
    <div>
    <Routes>
  <Route path='/' element ={<Home></Home>}/>
  <Route path='/project' element ={<Project></Project>}/>
  <Route path='/about' element ={<About></About>}/>
  <Route path='/contact' element ={<Contact></Contact>}/>
    </Routes>
    </div>
  );
}

export default App;
