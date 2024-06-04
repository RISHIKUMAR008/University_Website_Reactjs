import React from 'react'
import './About.css';
import abbout_img from '../../Assets/rrr.png'
import play_icon from '../../Assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={abbout_img} alt="" className='about-img' />
            <img src={ play_icon} alt=""  className='play-icon'/>

        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Going to university isn't just about studying – but you have to learn to balance your work-life ratio</p>
        </div>
      
    </div>
  )
}

export default About
