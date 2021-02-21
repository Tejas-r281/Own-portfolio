import React from 'react'
import Navbar from "./Navbar";
import Education from "./Education";
import Skills from './Skills';
import Projects from './Projects';
import About from "./About";
import Footer from './Footer';
import "./Public.css";
import "./Java";
// import Home from "./Home";

import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';


function App() {
    return (
        <>
           <Navbar/>
           <Home/>
           <About/>
          <Education/>
          <Skills/>
          <Projects/>
          <Skills/>
          <Footer/>

        </>
    )
}

export default App
