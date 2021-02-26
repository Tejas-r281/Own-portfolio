import React from 'react';
import "./Footer.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';

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
        <a href="https://www.facebook.com/profile.php?id=100023852830406" target="_blank">
          <FacebookIcon style={{ fill: "blue", fontSize: "30px" }} />
        </a>
        <a href="https://www.linkedin.com/in/raushankumar43/" target="_blank">
          <LinkedInIcon style={{ fill: "#0e76a8 ", fontSize: "30px" }}  />
        </a>
        <a href="https://www.instagram.com/tejas_r_28/" target="_blank">
        <InstagramIcon style={{ fill: "#8a3ab9", fontSize: "30px" }}  />
        </a>
        <a href="https://github.com/Tejas-r281" target="_blank">
          <GitHubIcon style={{ fill: "#F4CBB2", fontSize: "30px" }} />
        </a>
        <a href="https://twitter.com/Raushan51745298" target="_blank">
          <TwitterIcon style={{ fill: "#00acee", fontSize: "30px" }} />
        </a>

</div>
    </div>
  );
}
