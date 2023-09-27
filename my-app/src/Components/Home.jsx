import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Styles/Navbar.css"
import '../Styles/home.css'
import image from '../Images/Ahmed.jpg'
import { Link } from "react-router-dom"
const home = () => {
  return (  
     
    <div className="cont">
    <Card className='img' style={{ width: '21.6rem' }}>
    <Card.Img className='image' variant="top" src={image} />
      </Card>
      <div className="sec">
        <Card.Body className='bd'>
          <Card.Title> <h1 id='name'>_ I'M AHMED ASHRAF.</h1>
            <h1 id='we'>FULL STACK-DEVELOPER</h1>
        </Card.Title>
        <Card.Text className='abt'>
        Experienced in developing end-to-end web solutions, with expertise in both front-end and back-end technologies including HTML, CSS, JavaScript, Node.js, and databases such as MongoDB.
        </Card.Text>
        <Button id='btnP' ><Link to="/About"  style={{textDecorationLine:'none', color:'whitesmoke'}}>MORE ABOUT ME</Link></Button>
      </Card.Body>
        </div>
      </div>
  )
}
export default home;
