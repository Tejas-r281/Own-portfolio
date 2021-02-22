import React from 'react';
import "./Footer.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

function sendEmail(){
  var str = window.open('mailto:akshu2353@gmail.com', '_blank');
}

export default function LabelBottomNavigation() {

  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    //   console.log(event);
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="container-fluid  footer d-flex justify-content-center align-items-center">
      <div id="foo" className="d-flex justify-content-center align-items-center" >
        <a href="https://www.facebook.com/profile.php?id=100013267181447" target="_blank">
          <FacebookIcon style={{ fill: "blue", fontSize: "30px" }} />
        </a>
        <a href="https://www.linkedin.com/in/akshat-agarwal-77a116188/" target="_blank">
          <LinkedInIcon style={{ fill: "#0e76a8 ", fontSize: "30px" }}  />
        </a>
        <a href="https://www.instagram.com/itsaksht/" target="_blank">
        <InstagramIcon style={{ fill: "#8a3ab9", fontSize: "30px" }}  />
        </a>
        <a href="https://github.com/akshat7593" target="_blank">
          <GitHubIcon style={{ fill: "#F4CBB2", fontSize: "30px" }} />
        </a>
         {/* <a href="mailto:akshu2353@gmail.com" target="_blank"> */}
        <a style={{cursor:"pointer"}} onClick={sendEmail}>
          <EmailIcon style={{ fill: "red", fontSize: "30px" }}  />
        </a>
</div>
    </div>
  );
}
