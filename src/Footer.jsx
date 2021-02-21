import React from 'react';
import "./Footer.css";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';



export default function LabelBottomNavigation() {

  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    //   console.log(event);
      console.log(newValue);
    setValue(newValue);
  };

  return (
      <div className="container-fluid  footer d-flex justify-content-center align-items-center">
    <BottomNavigation id="foo" value={value} onChange={handleChange} >
        <a href="https://www.facebook.com/profile.php?id=100013267181447" target="_blank">
      <BottomNavigationAction label="FACEBOOK" value="face" icon={<FacebookIcon style={{fill:"blue",fontSize:"30px"}} />} />
      </a>
      <a href="https://www.linkedin.com/in/akshat-agarwal-77a116188/" target="_blank">
      <BottomNavigationAction  label="LINKEDIN" value="link" icon={<LinkedInIcon  style={{fill:"#0e76a8 ",fontSize:"30px"}}/>} />
      </a>
      <a href="https://www.instagram.com/itsaksht/" target="_blank">
      <BottomNavigationAction label="INSTAGRAM" value="ins" icon={<InstagramIcon style={{fill:"#8a3ab9",fontSize:"30px"}} />} />
      </a>
      <a href="https://github.com/akshat7593" target="_blank">
      <BottomNavigationAction label="GITHUB" value="git" icon={<GitHubIcon style={{fill:"#F4CBB2",fontSize:"30px"}}/>} />
      </a>
      <a href="mailto:rk1178816@gmail.com" target="_blank">
      <BottomNavigationAction label="EMAIL" value="email" icon={<EmailIcon style={{fill:"red",fontSize:"30px"}}/>} />
      </a>
    </BottomNavigation>
    </div>
  );
}
