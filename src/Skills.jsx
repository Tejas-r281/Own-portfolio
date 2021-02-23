
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
                            <Tooltip title="Spoj" interactive>

                                <a href="https://www.spoj.com/users/kya_bantai/" target="_blank"> <Avatar alt="Remy Sharp" src="https://stx1.spoj.com/gfx/spoj-fb.jpg" /></a>
                            </Tooltip>
                            <Tooltip title="Codechef" interactive>
                                <a href="https://www.codechef.com/users/akshu30" target="_blank">
                                    <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg" /></a></Tooltip>
                            <Tooltip title="Codeforces" interactive>
                                <a href="https://codeforces.com/profile/whiteWalkr" target="_blank">
                                    <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/b4/6e/54/b46e546a3ee4d410f961e81d4a8cae0f.jpg" /></a>
                            </Tooltip>
                        </div>
                    </div>
                </div>



            </div>
        </>

    )
}

export default Skills
