import React from 'react'
// import "./Projects.css"

const Projectsmath=(pros)=>{
    // console.log(pros.src);
  return(
      <>
        <div className="col-md-6 col-lg-4 ad my-2 ">
    <div className="imgsection ">
        <div className="hover cover">
            <a href={pros.link} target="_blank">
            <h4 className="text-center">{pros.desc}</h4>
            </a>
        </div>
        <div className="pic1 ">
            <img className=" pic2 rounded-2 " src={pros.src} alt="sorry image not available"/>
            {/* <h1 className="text-center">raushan kumar</h1> */}
        </div>

    </div>
    <hr/>
</div>

</>
  )
}

export default Projectsmath
