import React from 'react';
import { FaShare } from "react-icons/fa";



export const ProfileSelection = () => {
  return (
    <div className='profile-selection'>
        <div id='profile__img'>
            <img src="Banner.jpg" className="profile_img"   />
        </div>
        <div id='twitter'>
            <h3><a href="http://">Annette Black</a></h3>
            
        </div>
         <div className='avatar__share'>
         <FaShare 
         className='icon-1'
         style={{position:'absolute', 
         width: '15.19px',
          height: '14.02px',
          left:'40.5%',
          right:'40.53%',
          top:'30.95%',
          bottom:'14.95%',
          color: 'rgba(152, 162, 179, 1)'
        
        }

         }/>
         </div>
    </div>
  )
}
