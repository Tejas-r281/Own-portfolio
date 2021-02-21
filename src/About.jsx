import React from 'react'
import "./About.css"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';






function About() {
    return (
        <>
            <h1 className="heading mb-4"><span>About me</span></h1>
            <div className="container-fluid   about">
                <div className="container me ">
                    <div className="row ">
                        <div className="col-lg-6 d-flex justify-content-center  flex-column align-items-center order-lg-1  mt-4 mb-4  order-2">
                            <div className="upper ">
                                <h2>
                                    I am a CSE sophomore at IIEST,Shibpur.I am a full stack web developer and currently learning app development using Flutter.
                        </h2>
                            </div>
                            <div className="lower">
                                <h4>
                                    I am a curious person who enjoys figuring out the building blocks of the world, and rearranging them to build something even better. I always love to explore and keep learning new things from everyone.In my free time i read journals and articles about space discoveries and missions.I am highly inspired by John Bresina,Computer Scientist at NASA.
                         </h4>
                            </div>
                        </div>
                        {/* <hr className="line" /> */}
                        <div className="col-lg-6 d-flex justify-content-center align-items-center   order-lg-2 mt-4 order-1">
                            <div className="content d-flex justify-content-center align-items-center flex-column  ">
                                <div className="pic">
                                    <Avatar className="img" alt="Remy Sharp" src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-0/c0.0.600.600a/p600x600/123942340_1077561166029446_1689730246366936844_o.jpg?_nc_cat=109&ccb=3&_nc_sid=09cbfe&_nc_ohc=Ti6K1sUdzPIAX-Ia24Q&_nc_ht=scontent.fpat3-1.fna&tp=27&oh=05a34519446c006da64e9acf29c8d14d&oe=6057C0B8" />
                                </div>
                                <div className="mt-2 bottom d-flex justify-content-center align-items-center flex-column">
                                    <div>  Competitive Programmer <span>||</span> FrontEnd developer</div>
                                    <div>
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
