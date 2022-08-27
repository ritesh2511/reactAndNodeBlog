import React from 'react'
import "./header.css"
export default function header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>ANIMIX</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img src="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="headerImg" />
    </div>  
  )
}
