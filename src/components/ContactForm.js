import React from 'react';
import { Link } from 'react-router-dom';
export const ContactForm = () => {
  return (
    <Link to={"/Contact"}>
         <div id='contact'>
            <h3>Contact Me</h3>
         </div> 
    </Link>
  )
}
