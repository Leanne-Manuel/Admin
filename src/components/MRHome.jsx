import React from 'react'
import './styles/MRHome.css'
export default function MRHome (props) {
  return (
    <div className='return'>
         <div className="musicac">
              <img src={props.link} alt="" />
         </div>
         <p>Angola</p>
         <p className='subt'>Luanda</p>
    </div>
  );
}
