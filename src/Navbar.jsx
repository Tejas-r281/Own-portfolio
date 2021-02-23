
import React from 'react'
import "./Navbar.css";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import FlareIcon from '@material-ui/icons/Flare';
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    // document.getElementById('ram').classList.remove('display');
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}


window.addEventListener('scroll',(e)=>{
    var height= window.pageYOffset;
    if(height>=100)
    {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").classList.add("background");
    document.getElementById("navbar").classList.add("shadow");
    document.getElementById("navbar").classList.remove("container");
    document.getElementById("navbar").classList.add("container-fluid");
    document.getElementById("logo").classList.remove("display");
    document.getElementById("padding").classList.add("padding");
    
    }
    else
    {
        document.getElementById("navbar").classList.remove("background");
        document.getElementById("navbar").classList.remove("shadow");
        document.getElementById("navbar").classList.remove("container-fluid");
        document.getElementById("navbar").classList.add("container");
        document.getElementById("logo").classList.add("display");
        document.getElementById("padding").classList.remove("padding");
        document.getElementById('ram').classList.add('display');
    }
})


function Navbar() {
    return (
        <>
            <nav className="navbar  bg-transparent fixed-top container   navbar-expand-lg navbar-light bg-light" id="navbar">
                <div className="container-fluid " id="padding">
                <Avatar className="m-3 display " id="logo" alt="Remy Sharp" src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/87828845_881717295613835_7168398501192138752_o.jpg?_nc_cat=106&ccb=3&_nc_sid=174925&_nc_ohc=opzqsxIh-7cAX-QBZnr&_nc_ht=scontent.fpat3-1.fna&oh=0b51cae15cab52ca5b4af20ce8f219ca&oe=6056D6CC" />
                    <a className="navbar-brand" href="#Home">Portfolio
                    <FlareIcon className="spinner display" id="ram"/>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 na navbar-nav-scroll" >

                            <li className="nav-item">

                                <a
                                className="nav-link " aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#education">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#project">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skill">Skill</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>



        </>
    )
}

export default Navbar
