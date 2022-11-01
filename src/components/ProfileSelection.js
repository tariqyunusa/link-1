import React from 'react';
import { FaShare } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa"



export const ProfileSelection = () => {
  return (
    <div className='profile-selection'>
        <div id='profile__img'>
            <img src="/banner.jpg" className="profile_img"   />
        </div>
        <div id='twitter'>
            <h3><a href="http://">Annette Black</a></h3>
            
        </div>
         <div className='avatar__share'>
         <FaShare className='icon-1'/>
         <FaEllipsisH  className='icon-2'/>
         </div>
    </div>
  )
}
