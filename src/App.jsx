import React from 'react'
import Navbar from "./Navbar";
import Education from "./Education";
import Skills from './Skills';
import Projects from './Projects';
import About from "./About";
import Footer from './Footer';
import "./Public.css";
import Projectsmath from './Projectsmath';
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
      <div className="a" id="about"  data-aos="zoom-out-up"
    data-aos-offset="50"
    data-aos-duration="1500">
      <About />

      </div>
      <div className="aa" id="skills" data-aos="fade-left">
      <Skills />
      </div>
      <div className="a" id="education" data-aos="fade-right" data-aos="fade-up"
    data-aos-offset="250"
    data-aos-duration="1000"
    >
      <Education />
      </div>
      <div className="a" id="projects" tabindex="-1" id="myh2">
        <Projects/>
        {/* <Projectsmath/> */}
      </div>
      <div className="a" id="contact" data-aos="fade-right"
    data-aos-offset="400"
    data-aos-duration="1000">
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
