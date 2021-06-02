import React from 'react'
import "./Home.css";
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
function downloadFile() {
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.target = "_rausn";
    link.href =
      "https://drive.google.com/file/d/1C_RVucC-mtWitIG7qofe5nYwR0kDZILv/view?usp=sharing";
    link.download = "";
    link.click();
}
function Home() {

    return (

        <div className="container-fluid" id="Home">
            <div className="home container ">
                <section id="hero">
                    <div className="container hero">
                        <div>
                            <h1 className="dis">HI , I AM  <span></span></h1>
                            <h1 className="dis">RAUSHAN KUMAR <span></span></h1>
                            <h1 className="dis">COMPETITIVE PROGRAMMER <span></span></h1>
                        </div>
                    </div>
                </section>
                <Button className="btn shadow-lg mt-4" onClick={downloadFile}>
                    <CloudUploadIcon className="m-2" style={{ fill: "red", fontSize: "30px" }} />
                     Download CV
                 </Button>
            </div>

        </div>
    )
}

export default Home
