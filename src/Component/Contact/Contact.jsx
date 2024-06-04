import React from 'react'
import './Contact.css'
import msg_icon from  '../../Assets/msg-icon.png'
import mail_icon from  '../../Assets/mail-icon.png'
import phone_icon from  '../../Assets/phone-icon.png'
import location_icon from  '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f8cfb852-ad74-458d-8f89-504d7e8fec42");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
   <div className="contact">
    <div className="contact-col">
        <h3>Send us a message <img src={msg_icon}alt="" /></h3>
        <p> Feel free to reach out through contact form or find our contact information below.
             your Feedback,questions and suggestion are important to
             us as we strive to provide exceptional service to our university community</p>
             <ul>
                <li>
                     <img src={mail_icon} alt="" />Contact@gmail.com </li>
                <li> <img src={phone_icon} alt="" />+9199999</li>
                <li> <img src={location_icon} alt="" />79, Guwahati<br/>Assam,INDIA</li>
             </ul>
        </div>
        <div className="contact-col">
            <form  onSubmit={onSubmit}>
                <label> Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phoen Number</label>
                <input type="number" name='phone'placeholder='Enter your mobile number' required />
                <label >Write Your Message</label>
                <textarea name="message"  rows="6"></textarea>
                <button type='submit' className='btn dark-btn'> <img src={white_arrow} alt="" />Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
   </div>
  )
}

export default Contact
