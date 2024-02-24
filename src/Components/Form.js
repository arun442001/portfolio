import React from 'react'
import './Form.css'

function Form() {
  return (
    <div>
        <div>
            <form>
                <div >
                <label>Your Name</label>
                <input type='text'></input>
                </div>
                <div>
                <label>Email</label>
                <input type='mail'></input>
                </div>
                <div>
                <label>Subject</label>
                <input type='text'></input>
                </div>
                <div>
                <label>Message</label>
                <input type='text'></input>
                </div>
                <button className='btn btn_submit'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Form
