import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Work from "./Work"
import Contact from "./Contact"
import Navbar from './Navbar'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={< Work />} />
          <Route path='/contact' element={< Contact/>} />
        </Routes>
    </Router>
      
    </div>
  )
}

export default App
