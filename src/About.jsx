import React from 'react'
import "./About.css"
import Avatar from '@material-ui/core/Avatar';






function About() {
    return (
        <>
            <h1 className="heading "><span className="rounded shadow p-3">About me</span></h1>
            <div className="container-fluid     about">
                <div className="container me    ">
                    <div className="row ">
                        <div className="col-lg-6 d-flex justify-content-center  flex-column align-items-center order-lg-1  cont  order-2">
                            <div className="upper text-black-50   ">
                                <h2>
                                    I am a CSE sophomore at IIEST,Shibpur.I am a full stack web developer and currently learning Competitive programming using cpp.
                        </h2>
                            </div>
                            <div className="lower  text-black-50">
                                <h4>
                                    I am a curious person who enjoys figuring out the building blocks of the world, and rearranging them to build something even better. I always love to explore and keep learning new things from everyone.In my free time i read journals and articles about space discoveries and missions.
                                 </h4>
                                 <h4>
                                     <span className=" text-black-50 display-8">
                                         EMAIL :
                                     </span>
                                     <span className=" text-success mx-2">
                                         raushan.043.kumar@gmail.com
                                     </span>
                                 </h4>
                            </div>
                        </div>
                        {/* <hr className="line" /> */}
                        <div className="col-lg-6 d-flex justify-content-center align-items-center   order-lg-2 mt-4 order-1 my-5">
                            <div className="content  d-flex justify-content-center align-items-center flex-column  ">

                                <div className="pic mt-5">
                                    {/* <div className="round ">

                                    </div> */}
                                    <img className="img mt-5" alt="Image not available at this moment" src={process.env.PUBLIC_URL + 'images/about.jpg'}/>
                                </div>
                                <div className=" mb-lg-5 bottom d-flex justify-content-center align-items-center flex-column  ">
                                    <div className="text-black-50">  Competitive Programmer <span>||</span> FrontEnd developer</div>
                                    <div className="text-black-50">
                                        Deep Leaning <span>||</span> Ds and Algo
                         </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About
