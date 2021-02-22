
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./Skills.css";
import Avatar from '@material-ui/core/Avatar';




function Skills() {
    return (
        <>
            <div className="heading m-5">
                <span className="shadow pb-3 px-5 rounded" >Skills</span>
            </div>
            <div className="container gyan  shadow-lg py-5 pl-2 ">
                <div className="row ">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">Deep learning</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider
                                    defaultValue={90} valueLabelDisplay="on" style={{ color: "red" }} disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" precision={0.5} defaultValue={4} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                <hr className=" mb-5"/>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">C</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider
                                    defaultValue={100} valueLabelDisplay="on" style={{ color: "red" }} disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" defaultValue={5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                <hr className=" mb-5"/>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">C++</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider
                                    defaultValue={100} valueLabelDisplay="on" style={{ color: "red" }} disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" defaultValue={5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                <hr className=" mb-5"/>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">Ds and Algo</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider
                                    defaultValue={80} valueLabelDisplay="on" style={{ color: "red" }} disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5"precision={0.5} defaultValue={3.5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                <hr className=" mb-5"/>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">HTML</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider
                                    defaultValue={60} valueLabelDisplay="on" style={{ color: "red" }} disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" precision={0.5} defaultValue={2.5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                <hr className=" mb-5"/>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">CSS</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider
                                    defaultValue={60} valueLabelDisplay="on" style={{ color: "red" }} disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" precision={0.5} defaultValue={3.5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                <hr className=" mb-5"/>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">JAVASCRIPT</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider
                                    defaultValue={60} valueLabelDisplay="on" style={{ color: "red" }} disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" precision={0.5} defaultValue={3.5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                <hr className=" mb-5"/>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">Competitive coding</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider
                                    defaultValue={95} valueLabelDisplay="on" style={{ color: "red" }} disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" precision={0.5} defaultValue={4.5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                <hr className=" mb-5"/>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">Python</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider
                                    defaultValue={100} valueLabelDisplay="on" style={{ color: "red" }} disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" defaultValue={5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                    <hr className="mt-3"/>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between align-items-center  pt-4 ">
                        <Avatar alt="Remy Sharp" src="./codeforces.jpg" />
                        <Avatar alt="Remy Sharp" src="" />
                        <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/b4/6e/54/b46e546a3ee4d410f961e81d4a8cae0f.jpg" />
                        </div>
                    </div>
                </div>



            </div>
        </>

    )
}

export default Skills
