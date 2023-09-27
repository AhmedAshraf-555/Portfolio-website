import React from 'react'
import '../Styles/contact.css'
// import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMap, FaPhone, FaTwitter} from "react-icons/fa" 
const contact = () => {
  return (
    <Card style={{ width: '100%' , height:'100vh', border:'none', }}>
      <Card.Body className='body'>
        <Card.Title className='heading'><h1 id='ct' >CONTACT</h1>
          <li><h1 id='gi'>GETIN</h1> <h1 id='tc'>TOUCH</h1></li>
        </Card.Title>
        <Card.Text>
          <div className='head'>
            <h4>DON'T BE SHY!</h4>
            <p id='per'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <p className="adress">
              < FaMap className='icon' />
              <span className='span'> ADDRESS POINT</span> 
               <p>Rasheed Mohalla Main Bazar Rana Town, Lahore.</p>
            </p>
            <p className="adress">
              < FaEnvelope className='icon' />
              <span className='span'> MAIL ME</span> 
               <p>ahmedkhokhar658@gmail.com</p>
            </p>
            <p className="adress">
              < FaPhone className='icon' />
              <span className='span'> CALL ME</span> 
              <p>+92 302 4630485</p>
              <hr />
            </p>
            <div className="contact">
              <ul>
                <li><a href="https://www.facebook.com/profile.php?id=100028902920980" target='_blank' rel='noreferrer' >< FaFacebook className='ic' /></a></li>
                <li><a href="https://www.instagram.com/ahmed_khokhar7/" target='_blank' rel='noreferrer' >< FaInstagram className='ic' /></a></li>
                <li><a href="https://www.linkedin.com/in/ahmed-ashraf-b081a9243/" target="_blank" rel='noreferrer' >< FaLinkedin className='ic'  /></a></li>
                <li><a href="https://twitter.com/Ahmed61900" target='_blank' rel='noreferrer' ></a><FaTwitter className='ic'/></li>
             </ul>
            </div>
          </div>
          
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default contact
