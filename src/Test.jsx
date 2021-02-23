import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
// import { debounce } from '@material-ui/core';



// console.log(raushan.id);


function valuetext(value) {
    // console.log(value);
  return `${value}°C`;
}

export default function DiscreteSlider() {
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    const timer =
      counter<85 && setInterval(() => setCounter(counter + 1), 100);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <Typography  gutterBottom>
        Always visible
      </Typography>
      {/* <div className="raushan" >70</div> */}
      <Slider
      className="raushan"
       value={counter}
        defaultValue={80}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay={counter<85?"on":"auto"}
        aria-labelledby="discrete-slider-custom"
        id="10"
      />
    </div>
  );
}
