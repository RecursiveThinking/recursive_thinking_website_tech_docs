import React from 'react';
import './Header.css';
import image from '../images/recursivelogo.png'

const header = () => {
  return (
    <div className="Header">
      <img className='logo' src={image} alt='Recursive Thinking Logo'/>
    </div>
  )
}

export default header;