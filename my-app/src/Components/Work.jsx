import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/work.css'
import company from '../Images/company1.png'
import gdWeb from '../Images/gd-web.png'
import api from '../Images/news-api.png'
import capi from '../Images/custom.png'
import dbapi from '../Images/database.png'
const work = () => {
  return (
    <div className='body'>
      <div className="heading">
    <h1 id='wk' >WORKS</h1>
        <li><h1 id='my'>MY</h1><h1 id='pt'>PORTFOLIO</h1></li>
      </div>
      <h2 id='title' >HTML, CSS</h2>
      <div className="html">
      <Card className='project' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={company} />
    <Card.Body>
          <Card.Title className='tit' >Portfolio Website</Card.Title>
      <Button className='anchor'><a href="https://github.com/AhmedAshraf-555/portfolio" target="_blank" rel='noreferrer' >GET CODE</a></Button>
    </Card.Body>
      </Card>
      <Card className='project' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={gdWeb} />
    <Card.Body>
            <Card.Title className='tit' >Game Development UI</Card.Title>
      <Button className='anchor'><a href="https://github.com/AhmedAshraf-555/Game-development-website" target="_blank" rel='noreferrer' >GET CODE</a></Button>
    </Card.Body>
        </Card>
      </div>
      <h2 id='title' >Node JS</h2>
      <div className='node' >
      <Card className='project' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={api} />
    <Card.Body>
          <Card.Title className='tit' >News Api Fetching</Card.Title>
      <Button className='anchor'><a href="https://github.com/AhmedAshraf-555/Headline-fetching" target="_blank" rel='noreferrer' >GET CODE</a></Button>
    </Card.Body>
      </Card>
      
      <Card className='project' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={capi} />
    <Card.Body>
          <Card.Title className='tit' >Custom Api Fetching</Card.Title>
      <Button className='anchor'><a href="https://github.com/AhmedAshraf-555/Headline-fetching" target="_blank" rel='noreferrer' >GET CODE</a></Button>
    </Card.Body>
      </Card>
      <Card className='project' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={dbapi} />
    <Card.Body>
          <Card.Title className='tit' >MongoDB Api Fetching</Card.Title>
      <Button className='anchor'><a href="https://github.com/AhmedAshraf-555/MVC-Project" target="_blank" rel='noreferrer' >GET CODE</a></Button>
    </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default work
