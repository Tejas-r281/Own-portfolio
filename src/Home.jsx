import React from 'react'
import "./Home.css";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
function downloadFile() {
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.target = "_rausn";
    link.href = "https://drive.google.com/file/d/1EWO_rd1R2ITwxIUTjPOpkbW-lezTDp1F/view?usp=sharing";
    link.download="";
    link.click();
}
function Home() {

    return (

        <div className="container-fluid" id="Home">
            <div className="home container ">
                <div>
                    Hi <span className="comma">,</span> This is
                 </div>
                <div>
                    Akshat Agrawal
                 </div>
                <div className="comp">
                    Competitive Programmer
                 </div>
                <div className="resume shadow-lg rounded-3">
                 <button className="btn" onClick={downloadFile}>
                     <CloudUploadIcon className="m-2" style={{fill:"red",fontSize:"30px"}}/>
                     Download CV
                 </button>
                </div>
            </div>
        </div>
    )
}

export default Home
