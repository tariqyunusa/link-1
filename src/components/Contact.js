import React from 'react';
import { Footer } from "./Footer.js";


export const Contact = () => {
  return (
    <div className='contact__form'>
        <h2  id='contact__me'>Contact Me</h2>
        <h4 id='header_contact'>Hi there, contact me to ask me about anything you have in mind.</h4>
        <div className="Form">
        <div className="Name_row"></div>
        <div className='First_Name_'>
         <h6 >First name</h6>
         <input type="text" id='First_Name'  placeholder='Enter your first name'/>
        </div>
        <div className='Last_Name_'>
          <h6>Last Name</h6>
          <input type="text"  id='Last_Name' placeholder='Enter your last name' />
          </div>
          <div id="email_"> 
            <h6>Email</h6>
            <input type="email"  id="email"  placeholder='yourname@email.com'/>
          </div>
          <div className='message_Area'>
            <h6>Message</h6>
            <input type="text" id='message' placeholder='Send me a message and Ill reply you as soon as possible...' />

          </div>
          <div className='_check_box'>
            <input type="checkbox" name="" id="checkbox" />
            <p>You agree to providing your data to  who may contact you.</p>
          </div>
           <button type="submit" id='btn_submit'>Send message</button>
           <Footer />
     <div>
     
     </div>
        
        

        </div>
    </div>
  )
}
