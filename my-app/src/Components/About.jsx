import React from 'react'
import '../Styles/about.css'
import Card from 'react-bootstrap/Card';
import { FaCanadianMapleLeaf} from "react-icons/fa" 
import ProgressBar from 'react-bootstrap/ProgressBar';
const about = () => {
  return (
    <>
      <div className="heading">
    <h1 id='re' >RESUME</h1>
        <li><h1 id='ab'>ABOUT</h1><h1 id='me'>ME</h1></li>
      </div>
      <div className="personal">
        <Card className='cardi' >
      <Card.Body className='ody'>
        <Card.Title className='title'>PERSONAL INFOS</Card.Title>
        <Card.Text className='text' >
              <ul>
                <li>
                  <span className='tile'>First Name:</span>
                  <span className='info' >Ahmed</span>
                </li>
                <li>
                  <span className='tile'>Last Name:</span>
                  <span className='info' >Ashraf</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span className='tile'>Age:</span>
                  <span className='info' >20 Years</span>
                </li>
                <li>
                  <span className='tile'>Nationality:</span>
                  <span className='info' >Pakistani</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span className='tile'>Freelance:</span>
                  <span className='not' >Not Available</span>
                </li>
                <li>
                  <span className='tile'>Address:</span>
                  <span className='info' >Lahore, Pakistan</span>
                </li>
              </ul>
               <ul>
                <li>
                  <span className='tile'>Phone:</span>
                  <span className='info' >+92302 4630485</span>
                </li>
                <li>
                  <span className='tile'>Email:</span>
                  <span className='info' >ahmedkhokhar658@gmail.com</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span className='tile'>Facebook:</span>
                  <span className='info' >Ahmed Khokhar</span>
                </li>
                <li>
                  <span className='tile'>Language:</span>
                  <span className='info' >English, Urdu, Punjabi</span>
                </li>
              </ul>
        </Card.Text>
      </Card.Body>
        </Card>
        <hr />
      </div>
      <div className="skills">
        <Card style={{ width: '100%', border: 'none' }}>
      <Card.Body>
        <Card.Title className='skill'>MY SKILLS</Card.Title>
            <div className="bars"> 
              <li>
                <h5>HTML</h5>
              <ProgressBar  className='bar' now={60} label={`60%`} />
              </li>
              <li>
                <h5>CSS</h5>
              <ProgressBar  className='bar' now={80} label={`80%`} />
              </li>
              <li>
                <h5>JAVASCRIPT</h5>
              <ProgressBar  className='bar' now={70} label={`70%`} />
              </li>
              <li>
                <h5>REACT JS</h5>
              <ProgressBar  className='bar' now={60} label={`60%`} />
              </li>
              <li>
                <h5>BOOTSTRAP</h5>
              <ProgressBar  className='bar' now={80} label={`80%`} />
              </li>
              <li>
                <h5>MONGO DB</h5>
              <ProgressBar  className='bar' now={70} label={`70%`} />
              </li>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: '100%', border: 'none' }}>
        <Card.Body>
            <Card.Title className='skill'>EDUCATION</Card.Title>
            <div className="edu">
              <li className='education'>
                < FaCanadianMapleLeaf className='icon' />
                <span className='time'>2020-2022</span>
                <h5>BACHELOR DEGREE 
                  <span className='uni'>-Universiity Of Punjab </span>
                </h5>
                <p className='pera'>BS.IT ADP </p>
              </li>
              <li className='education'>
                < FaCanadianMapleLeaf className='icon' />
                <span className='time'>2018-2020</span>
                <h5>INTERMEDIATE 
                  <span className='uni'>-Govt College Of Science </span>
                </h5>
                <p className='pera'>ICS PHYSICS </p>
              </li>
              <li className='education'>
                < FaCanadianMapleLeaf className='icon' />
                <span className='time'>2016-2018</span>
                <h5>MATRIC 
                  <span className='uni'>-Govt High School, Lahore</span>
                </h5>
                <p className='pera'>COMPUTER SCIENCE </p>
              </li>
              
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default about
