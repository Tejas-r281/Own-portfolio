
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
import Tooltip from '@material-ui/core/Tooltip';
import useState from 'react';



function valuetext(value) {
    // console.log(value);
    return `${value}°C`;
}


function Skills() {
    // const [va,current]= useState(0);
    const [counter, setCounter] = React.useState(0);
    React.useEffect(() => {
        const timer =
            counter <= 100 && setInterval(() => setCounter(counter +5),.1);
        return () => clearInterval(timer);
    }, [counter]);
    const [counter1, setCounter1] = React.useState(0);
    React.useEffect(() => {
        const timer =
            counter1 <= 80 && setInterval(() => setCounter1(counter1 +5),.1);
        return () => clearInterval(timer);
    }, [counter1]);
    const [counter2, setcounter2] = React.useState(0);
    React.useEffect(() => {
        const timer =
            counter2 <= 100 && setInterval(() => setcounter2(counter2 +5),.1);
        return () => clearInterval(timer);
    }, [counter2]);
    const [counter4, setcounter4] = React.useState(0);
    React.useEffect(() => {
        const timer =
            counter4 <= 80 && setInterval(() => setcounter4(counter4 +5),.1);
        return () => clearInterval(timer);
    }, [counter4]);
    const [counter5, setcounter5] = React.useState(0);
    React.useEffect(() => {
        const timer =
            counter5 <= 60 && setInterval(() => setcounter5(counter5 +5),.1);
        return () => clearInterval(timer);
    }, [counter5]);
    const [counter6, setcounter6] = React.useState(0);
    React.useEffect(() => {
        const timer =
            counter6 <= 60 && setInterval(() => setcounter6(counter6 +5),.1);
        return () => clearInterval(timer);
    }, [counter6]);
    const [counter7, setcounter7] = React.useState(0);
    React.useEffect(() => {
        const timer =
            counter7 <= 60 && setInterval(() => setcounter7(counter7 +5),.1);
        return () => clearInterval(timer);
    }, [counter7]);
    const [counter8, setcounter8] = React.useState(0);
    React.useEffect(() => {
        const timer =
            counter8 <= 90 && setInterval(() => setcounter8(counter8 +5),.1);
        return () => clearInterval(timer);
    }, [counter8]);
    const [counter9, setcounter9] = React.useState(0);
    React.useEffect(() => {
        const timer =
            counter9 <= 100 && setInterval(() => setcounter9(counter +5),.1);
        return () => clearInterval(timer);
    }, [counter9]);
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
                                    className="raushan"
                                    value={counter}
                                    defaultValue={80}
                                    getAriaValueText={valuetext}
                                    step={10}
                                    valueLabelDisplay={counter <= 100 ? "on" : "auto"}
                                    aria-labelledby="discrete-slider-custom"
                                    id="10"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" precision={0.5} defaultValue={5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                {/* <hr className=" mb-2" /> */}
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">C</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider className="raushan"
                                    value={counter1}
                                    defaultValue={80}
                                    getAriaValueText={valuetext}
                                    step={10}
                                    valueLabelDisplay={counter < 80 ? "on" : "auto"}
                                    aria-labelledby="discrete-slider-custom"
                                    id="10"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" defaultValue={5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                {/* <hr className=" mb-2" /> */}
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">C++</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider  className="raushan"
       value={counter2}
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay={counter<=100?"on":"auto"}
        aria-labelledby="discrete-slider-custom"
        id="10"
                                      />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" defaultValue={5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                {/* <hr className=" mb-2" /> */}
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">Ds and Algo</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider className="raushan"
       value={counter4}
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay={counter<80?"on":"auto"}
        aria-labelledby="discrete-slider-custom"
        id="10" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" precision={0.5} defaultValue={3.5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                {/* <hr className=" mb-2" /> */}
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">HTML</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider className="raushan"
       value={counter5}
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay={counter<60?"on":"auto"}
        aria-labelledby="discrete-slider-custom"
        id="10" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" precision={0.5} defaultValue={2.5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                {/* <hr className=" mb-2" /> */}
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">CSS</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider className="raushan"
       value={counter6}
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay={counter<60?"on":"auto"}
        aria-labelledby="discrete-slider-custom"
        id="10"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" precision={0.5} defaultValue={3.5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                {/* <hr className=" mb-2" /> */}
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">JAVASCRIPT</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider className="raushan"
       value={counter7}
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay={counter<60?"on":"auto"}
        aria-labelledby="discrete-slider-custom"
        id="10"  />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" precision={0.5} defaultValue={3.5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                {/* <hr className=" mb-2" /> */}
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            <div className="col-4">
                                <div className="skill d-flex justify-content-center align-items-center">
                                    <p className="pt-2">Competitive coding</p>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-center align-items-center">
                                <Slider  className="raushan"
       value={counter8}
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay={counter<90?"on":"auto"}
        aria-labelledby="discrete-slider-custom"
        id="10"   />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" precision={0.5} defaultValue={4.5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                </div>
                {/* <hr className=" mb-2" /> */}
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
                                 className="raushan"
                                 value={counter9}
                                  defaultValue={80}
                                  getAriaValueText={valuetext}
                                  step={10}
                                  valueLabelDisplay={counter<100?"on":"auto"}
                                  aria-labelledby="discrete-slider-custom"
                                  id="10"   />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center ">
                        <Rating name="customized-5" defaultValue={5} max={5}
                            style={{ color: "green" }} disabled />
                    </div>
                    <hr className="mt-3" />
                    <div className="row">

                        <div className="col-12 d-flex justify-content-between align-items-center  pt-4 ">
                        <Tooltip title="Interview bit" interactive>

                          <a href="https://www.interviewbit.com/profile/raushan-kumar_748" target="_blank"> <Avatar alt="Remy Sharp" src="data:image/png;base64,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" /></a>
                        </Tooltip>
                            <Tooltip title="Gfg" interactive>

                                <a href="https://auth.geeksforgeeks.org/user/raushan43/practice/" target="_blank"> <Avatar alt="Remy Sharp" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200617163105/gfg-logo.png" /></a>
                            </Tooltip>
                            <Tooltip title="Codechef" interactive>
                                <a href="https://www.codechef.com/users/raushan43/" target="_blank">
                                    <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg" /></a></Tooltip>
                            <Tooltip title="Codeforces" interactive>
                                <a href="https://codeforces.com/profile/tejas_ra" target="_blank">
                                    <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/b4/6e/54/b46e546a3ee4d410f961e81d4a8cae0f.jpg" /></a>
                            </Tooltip>
                            <Tooltip title="Leetcode" interactive>
                                <a href="https://leetcode.com/raushan043/" target="_blank">
                                    <Avatar alt="Remy Sharp" src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" /></a>
                            </Tooltip>
                        </div>
                    </div>
                </div>



            </div>
        </>

    )
}

export default Skills
