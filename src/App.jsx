import React from 'react'
import Navbar from "./Navbar";
import Education from "./Education";
import Skills from './Skills';
import Projects from './Projects';
import About from "./About";
import Footer from './Footer';
import "./Public.css";

import Home from "./Home";
import Contact from './Contact';
import Test from "./Test";

// import { Redirect, Route, Switch } from 'react-router-dom';
// import Home from './Home';


function App() {
  return (
    <>
    <div className="a">
      <Navbar />
      </div>
      <div className="a">
      <Home />
      </div>
      <div className="a">
      <About />
      </div>
      <div className="a">
      <Skills />
      </div>
      <div className="a">
      <Education />
      </div>
      <div className="a">
      <Contact />
      </div>
      {/* <div className="a container">
        <Test/>
      </div> */}
      <div className="a">
      <Footer />
      </div>


    </>
  )
}

export default App
