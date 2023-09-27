import React from 'react'
import "../Styles/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import {FaHome,FaBriefcase, FaComments, FaAddressCard } from "react-icons/fa"
import Nav from 'react-bootstrap/Nav';
import Tippy from '@tippy.js/react'
import "tippy.js/dist/tippy.css"
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {

  return (
    <>
    
      <Navbar expand="lg" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navi' >
          <Nav className="me-auto">
            <div className="bar" >
              <Nav.Link><li><Tippy content='HOME'><Link to="/"  id="hem"><FaHome className='home'/> </Link></Tippy></li></Nav.Link>
              <Nav.Link><li><Tippy content='ABOUT'><Link to="/about" id="hem" ><FaAddressCard className='home' /></Link></Tippy></li></Nav.Link>
            <Nav.Link><li><Tippy content='PORTFOLIO'><Link to='/work' id="hem" ><FaBriefcase className='home'/></Link></Tippy></li></Nav.Link>
              <Nav.Link><li><Tippy content='CONTACT'><Link to='/contact' id="hem"><FaComments className='home' /> </Link></Tippy></li></Nav.Link>
              </div>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
    </>
  )
}

export default NavBar
