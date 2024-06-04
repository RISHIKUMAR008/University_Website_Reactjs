import React, { useRef } from 'react'
import './testmonial.css'
import next_icon from '../../Assets/next-icon.png'
import back_icon from '../../Assets/back-icon.png'
import user_1 from '../../Assets/user-1.png'
import user_2 from '../../Assets/user-2.png'
import user_3 from '../../Assets/user-3.png'
import user_4 from '../../Assets/user-4.png'




const Testmonial = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward =()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;

  }
  const slideBackward =()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
    
  }
  return (
    <div className='testimonial'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>William jackson</h3>
                    <span>Edusity,USA</span>
                  </div>
                </div>
                <p>Choosing to purse my degree at Edusity was one of th e best decision i have ever made. the supportive community, state-of-the-art facilities and commitment to academic excellence have truly exceeded my expectation </p>
              </div>
            </li>
          <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>RISHI KUMAR</h3>
                    <span>ASSAM,INDIA</span>
                  </div>
                </div>
                <p>Choosing to purse my degree at Edusity was one of th e best decision i have ever made. the supportive community, state-of-the-art facilities and commitment to academic excellence have truly exceeded my expectation </p>
              </div>
            </li>
               <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>shradha</h3>
                    <span>NOIDA,INDIA</span>
                  </div>
                </div>
                <p>Choosing to purse my degree at Edusity was one of th e best decision i have ever made. the supportive community, state-of-the-art facilities and commitment to academic excellence have truly exceeded my expectation </p>
              </div>
            </li>   
            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>RAJU </h3>
                    <span>DELHI,INDIA</span>
                  </div>
                </div>
                <p>Choosing to purse my degree at Edusity was one of th e best decision i have ever made. the supportive community, state-of-the-art facilities and commitment to academic excellence have truly exceeded my expectation </p>
              </div>
            </li>
            </ul>

        </div>

      
    </div>
  )
}

export default Testmonial
