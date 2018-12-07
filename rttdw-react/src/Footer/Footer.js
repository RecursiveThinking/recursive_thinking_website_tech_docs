import React from 'react';
import './Footer.css'
import githubIcon from '../images/github.png'
import linkedin from '../images/in.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Copyright'>
        <p>©  Recursive Thinking, All Rights Reserved</p>
      </div>
      <div className='Icons'>
        <a href='https://github.com/RecursiveThinking/' target='_blank' rel="noopener noreferrer"><img className='github' src={githubIcon} alt='GitHub link' /></a>
        <a href='https://www.linkedin.com/company/recursivethinking/' target='_blank' rel="noopener noreferrer"><img className='linkedIn' src={linkedin} alt='LinkedIn link' /></a>
      </div>
    </div>
  
  )
}

export default Footer;