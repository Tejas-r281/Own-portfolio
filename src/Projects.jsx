import React from 'react'
import "./Projects.css";
import Projectslist from "./Projectslist";
import Projectsmath from './Projectsmath';


function Projects() {
    return (
        <>
            <div className="heading m-4 "><span className="p-5">
                Recent Projects</span></div>
            <div className="container shadow-lg  ">
                <div className="row add container ">
                    {
                        Projectslist.map((element)=>{
                          return  <Projectsmath desc={element.dis} src={element.src} link={element.link} />
                        })
                    }
                  
                </div>
            </div>
        </>
    )
}

export default Projects
