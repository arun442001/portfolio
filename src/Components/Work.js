import React from 'react'
import './Workcard.css'

import { NavLink } from 'react-router-dom'
import WorkData from './WorkData.js'
import Workcard from './Workcard.js'

function Work() {
  return (
    <div>
        <h1 className='project-heading'>Projects</h1>
    <div className='row row_card mx-auto'>
        {
            WorkData.map((val , index)=>{
                return(
                    <Workcard
                    key={index}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    site = {val.site}
                    />
                )

            })
        }
       
        
        </div>
      
    </div>
  )
}

export default Work
